import leagueTableData from '../data/leagueTable.json';
import leagueMatchesData from '../data/leagueMatches.json';
import allMatchesData from '../data/allMatches.json';

interface MatchData {
  Equipedom: string;
  Equipeext: string;
  Logodom: string | null;
  Logoext: string | null;
  Terrain: string;
  Date: string | null;
  Etat: boolean;
  Scoredom: number | null;
  Scoreext: number | null;
  competition?: string;
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
    // Utiliser les données statiques au lieu de l'API
    return leagueMatchesData;
  } catch (error) {
    return { error: "Impossible de charger les matchs. Veuillez réessayer plus tard." };
  }
};

export const fetchNextAndLastMatch = async (): Promise<{ nextMatch: MatchData | null, lastMatch: MatchData | null } | { error: string }> => {
  try {
    // Récupérer tous les matchs de TETE CRAMEE FC (Ligue + Coupe)
    const coupeMatches = (allMatchesData.coupe || []).map(match => ({ ...match, competition: 'Coupe' }));
    const ligueMatches = (allMatchesData.ligue || []).map(match => ({ ...match, competition: 'Ligue' }));
    const allMatches = [...coupeMatches, ...ligueMatches];

    // Filtrer uniquement les matchs de TETE CRAMEE FC
    const teteCrameeMatches = allMatches.filter(match => 
      match.Equipedom === 'TETE CRAMEE FC' || match.Equipeext === 'TETE CRAMEE FC'
    );

    const now = new Date();
    
    // Fonction pour convertir dd/mm/yyyy en Date
    const parseDate = (dateStr: string | null): Date => {
      if (!dateStr) return new Date(0); // Date très ancienne pour les dates nulles
      const [day, month, year] = dateStr.split('/');
      return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    };

    // Séparer les matchs avec et sans dates
    const matchesWithDates = teteCrameeMatches.filter(match => match.Date && match.Date !== null);
    
    // Trier les matchs avec dates
    const sortedMatches = matchesWithDates.sort((a, b) => {
      const dateA = parseDate(a.Date);
      const dateB = parseDate(b.Date);
      return dateA.getTime() - dateB.getTime();
    });

    // Chercher le prochain match dans les matchs avec dates SEULEMENT
    let nextMatch = sortedMatches.find(match => {
      const matchDate = parseDate(match.Date);
      return matchDate > now;
    }) || null;
    
    // Chercher le dernier match joué (avec score) de TETE CRAMEE FC
    const lastMatch = sortedMatches.reverse().find(match => {
      const matchDate = parseDate(match.Date);
      return matchDate < now && match.Scoredom !== null && match.Scoreext !== null;
    }) || null;

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
    // Utiliser les données statiques au lieu de l'API
    return leagueTableData;
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
        p[i].replace(/-/g, "--").replace(/\./g, "-") +
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

export const getTeamLogo = (logoName: string | null, teamName?: string): string => {
  // Logos spécifiques par nom d'équipe
  const teamLogos: { [key: string]: string } = {
    "BLACK PANAMA FC": "https://i.imgur.com/Dnepiih.png",
    "TETE CRAMEE FC": "https://i.imgur.com/emlZEjD.png",
    "LAS ALPACAS": "https://i.imgur.com/i684d6j.jpeg"
  };

  // Si on a un nom d'équipe et qu'il correspond à nos logos spécifiques
  if (teamName && teamLogos[teamName]) {
    return teamLogos[teamName];
  }

  // Si pas de logo fourni, utiliser le logo par défaut
  if (!logoName) {
    return "https://i.imgur.com/DjGJJbB.png";
  }

  // Logos spécifiques par nom de fichier
  const specificLogos: { [key: string]: string } = {
    "BPFC - Logo blanc sur noir.png": "http://www.football-loisir-amateur.com/Content/images/LogoTeam/BPFC%20-%20Logo%20blanc%20sur%20noir.png",
    "IMG_4511.png": "http://www.football-loisir-amateur.com/Content/images/LogoTeam/IMG_4511.png",
    "47572484_578497172579041_5205478604447678464_n.jpg": "http://www.football-loisir-amateur.com/Content/images/LogoTeam/47572484_578497172579041_5205478604447678464_n.jpg"
  };

  // Vérifier si c'est un logo spécifique
  if (specificLogos[logoName]) {
    return specificLogos[logoName];
  }

  // Pour les autres équipes, utiliser le logo par défaut
  return "http://www.football-loisir-amateur.com/Content/images/LogoTeam/Logo_default_team.png";
};