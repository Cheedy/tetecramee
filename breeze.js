export default {
    async fetch(request, env, ctx) {
      const url = "http://www.football-loisir-amateur.com/Home/GetClassement/136315";
      
      const fetchOptions = {
        headers: {
          "accept": "application/json, text/plain, */*",
          "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7,es;q=0.6",
          "content-type": "application/json;charset=UTF-8",
          "Referer": "http://www.football-loisir-amateur.com/Home/Classement"
        },
        body: JSON.stringify({
          "championnatId": 1363,
          "saisonId": 15
        }),
        method: "POST"
      };
  
      try {
        const response = await fetch(url, fetchOptions);
        const data = await response.json();
  
        // Ajouter les en-têtes CORS
        return new Response(JSON.stringify(data), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // Permettre les requêtes de tous les origines
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Méthodes permises
            "Access-Control-Allow-Headers": "Content-Type", // En-têtes permis
            "Cache-Control": "max-age=3600" // Cache la réponse pendant 1 heure (3600 secondes)
          }
        });
      } catch (error) {
        return new Response('Error fetching data', {
          status: 500,
          headers: {
            "Access-Control-Allow-Origin": "*", // En-tête CORS pour la gestion des erreurs également
          }
        });
      }
    },
  };
  