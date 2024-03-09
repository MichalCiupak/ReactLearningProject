export const url: string = 'https://rickandmortyapi.com/graphql'

export const episodeQuery = (season: string) => {
  const query = ` {
    episodes(page: 1, filter: { episode: "${season}" }) {
      results {
        id,
        episode,
        name,
        air_date
      }
    }
  }    
  `;
  return query;
};

export const charactersQuery = (episode: string) => {
  const query = ` {
    episodes(page: 1, filter: { episode: "${episode}" }) {
      results {
        characters {
          id,
          name,
          species
        }
      }
    }
  }    
  `;
  return query;
};  

export const characterDetailsQuery = (id: number) => {
  const query =` {
      character(id: ${id}) {
          id,
          name,
          status,
          species, 
          type,
          gender,
          image,
          origin {
            id,
            name
          },
          location {
            id,
            name
          }
      }
    }    
    `;
  return query;
};  