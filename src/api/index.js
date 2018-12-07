const alphaMode = false;

const BASE_URL = 'http://libras-o-jogo.herokuapp.com';

const endPoints = { root: '/', game: '/game' };

const getEndpoint = async (endpoint) => {
  const endPExists = Object.keys(endPoints).some((ep) => ep === endpoint);

  if (endPExists) {
    if (alphaMode) {
      return response;
    }

    const resp = await fetch(`${BASE_URL}${endPoints[endpoint]}`);
    const data = await resp.json();

    return data;
  }

  return 'Esse endpoint não existe';
};

export default getEndpoint;

const response = {
  palavras: [
    {
      nome: 'pedreiro',
      configuracoes: [
        {
          nome: 'namoro',
          imagem: 'https://i.imgur.com/vTWgKt1.png'
        },
        {
          nome: 'mão espalmada',
          imagem: 'https://i.imgur.com/QhWSKI0.png'
        }
      ]
    },
    {
      nome: 'goiaba',
      configuracoes: [
        {
          nome: 'xis',
          imagem: 'https://i.imgur.com/MK40xRu.png'
        },
        {
          nome: 'esse',
          imagem: 'https://i.imgur.com/4OMQsyC.png'
        }
      ]
    },
    {
      nome: 'onibus',
      configuracoes: [
        {
          nome: 'legal',
          imagem: 'https://i.imgur.com/VzgV1ER.png'
        }
      ]
    },
    {
      nome: 'flor',
      configuracoes: [
        {
          nome: 'efe',
          imagem: 'https://i.imgur.com/rtjDI4S.png'
        }
      ]
    }
  ],
  configuracao: {
    nome: 'namoro',
    imagem: 'https://i.imgur.com/vTWgKt1.png'
  },
  resposta: {
    nome: 'pedreiro',
    configuracoes: [
      {
        nome: 'namoro',
        imagem: 'https://i.imgur.com/vTWgKt1.png'
      },
      {
        nome: 'mão espalmada',
        imagem: 'https://i.imgur.com/QhWSKI0.png'
      }
    ]
  }
};
