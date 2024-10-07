import axios from 'axios';

interface MatchData {
  Equipedom: string;
  Equipeext: string;
  Logodom: string | null;
  Logoext: string | null;
  Terrain: string;
  Date: string;
  Etat: boolean;
  Scoredom: number | null;
  Scoreext: number | null;
}

interface TeamData {
  IdEquipe: number;
  Nom: string;
  Points: number;
  Victoire: number;
  Egalite: number;
  Defaite: number;
  Bp: number;
  Bc: number;
  CinqDernier: string[];
}

export const fetchMatches = async (): Promise<MatchData[] | { error: string }> => {
  try {
    const response = await axios.get('https://getrencontres.chedy-eltabaa.workers.dev/');
    return response.data;
  } catch (error) {
    return { error: "Impossible de charger les matchs. Veuillez réessayer plus tard." };
  }
};

export const fetchNextAndLastMatch = async (): Promise<{ nextMatch: MatchData | null, lastMatch: MatchData | null } | { error: string }> => {
  try {
    const matches = await fetchMatches();
    if ('error' in matches) {
      throw new Error(matches.error);
    }

    const now = new Date();
    const sortedMatches = matches.sort((a, b) => new Date(parseInt(a.Date.slice(6, -2))).getTime() - new Date(parseInt(b.Date.slice(6, -2))).getTime());

    const nextMatch = sortedMatches.find(match => new Date(parseInt(match.Date.slice(6, -2))) > now) || null;
    const lastMatch = sortedMatches.reverse().find(match => new Date(parseInt(match.Date.slice(6, -2))) < now && match.Scoredom !== null && match.Scoreext !== null) || null;

    return { nextMatch, lastMatch };
  } catch (error) {
    return { error: "Impossible de charger les matchs. Veuillez réessayer plus tard." };
  }
};

export const fetchNextMatch = async (): Promise<MatchData | { error: string }> => {
  const result = await fetchNextAndLastMatch();
  if ('error' in result) {
    return result;
  }
  return result.nextMatch || { error: "Aucun match à venir trouvé." };
};

export const fetchLeagueTable = async (): Promise<TeamData[] | { error: string }> => {
  try {
    const response = await axios.get('https://black-breeze-665a.chedy-eltabaa.workers.dev/');
    return response.data;
  } catch (error) {
    return { error: "Impossible de charger le classement. Veuillez réessayer plus tard." };
  }
};

export const UrlToGoogle = (url: string) => {
  if (!url) return;
  const p = url.split("/");
  let t = "";
  for (let i = 0; i < p.length; i++) {
    if (i === 2) {
      t +=
        p[i].replaceAll("-", "--").replaceAll(".", "-") +
        atob("LnRyYW5zbGF0ZS5nb29n") +
        "/";
    } else {
      if (i !== p.length - 1) {
        t += p[i] + "/";
      } else {
        t += p[i];
      }
    }
  }
  return encodeURI(t);
};

export const getSecureImageUrl = (logoName: string): string => {
  if (!logoName) return '';
  const baseUrl = 'http://www.football-loisir-amateur.com/Content/images/LogoTeam/';
  const fullUrl = baseUrl + logoName;
  return UrlToGoogle(fullUrl) + "?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=fr&_x_tr_hl=fr&_x_tr_pto=wapp";
};