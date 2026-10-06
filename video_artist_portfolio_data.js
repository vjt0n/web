const STORAGE_KEY = 'vjton_custom_projects_v1';
const defaultProjectsData = [
    {
        id: 1,
        title: 'FIP Festival internacional de Poesía',
        category: 'MOTION GRAPHICS',
        date: 'CCK, 2018',
        studio: '',
        role: '',
        canvasMode: 'glitch',
        media: [
            'https://youtu.be/oiMfRJbYVu4?si=H8N193LyysYQXOOp',
            'https://youtu.be/ll6H2iZ_An8?si=c3rv86TEyDnITSLc'
        ]
    },
    {
        id: 2,
        title: 'Capacitaciones OIT',
        category: 'MOTION GRAPHICS',
        date: 'Abril - Mayo 2021',
        studio: '',
        role: '',
        canvasMode: 'glitch',
        media: [
            'https://www.youtube.com/embed/AN73_JDMD1g?si=kkKawfDVY7Eqpcgi'
        ]
    },
    {
        id: 3,
        title: 'Glitchcon - Twitch',
        category: 'MOTION GRAPHICS',
        date: 'Diciembre 2020',
        studio: 'Wolfpack Multimedia',
        role: '',
        canvasMode: 'glitch',
        moreLink: 'https://www.twitch.tv/videos/800558240',
        media: []
    },
    {
        id: 4,
        title: 'HP CHINA',
        category: 'MOTION GRAPHICS',
        date: 'Abril - Mayo 2022',
        studio: 'Wolfpack Multimedia',
        role: '',
        canvasMode: 'glitch',
        media: []
    },
    {
        id: 5,
        title: 'Chocolate Remix - Bodyright',
        category: 'MOTION GRAPHICS',
        date: 'Febrero - Marzo 2022',
        studio: '',
        role: '',
        canvasMode: 'glitch',
        mediaLayout: 'vertical',
        mediaLimit: 8,
        moreLink: 'https://argentina.unfpa.org/es/news/contra-la-violencia-de-g%C3%A9nero-digital-unfpa-propone-un-nuevo-copyright-para-el-cuerpo-humano',
        media: [
            './pantallas/img/choco%20%281%29.webp',
            './pantallas/img/choco%20%282%29.webp',
            './pantallas/img/choco%20%283%29.webp',
            './pantallas/img/choco%20%284%29.webp',
            './pantallas/img/choco%20%285%29.webp',
            './pantallas/img/choco%20%286%29.webp',
            './pantallas/img/choco%20%287%29.webp',
            './pantallas/img/choco%20%288%29.webp'
        ]
    },
    {
        id: 6,
        title: 'Fake It Clothes',
        category: 'MOTION GRAPHICS',
        date: '',
        studio: '',
        role: '',
        canvasMode: 'glitch',
        media: []
    },
    {
        id: 7,
        title: 'Ca7riel EL DISKO',
        category: 'MOTION GRAPHICS / VISUALIZERS',
        date: 'Noviembre, 2021',
        studio: '',
        role: '',
        canvasMode: 'glitch',
        media: [
            'https://www.youtube.com/embed/6XY4MG2YP30?si=_4kjb3fITw3dEny4'
        ]
    },
    {
        id: 8,
        title: 'Los Meteoritos ACID DROP & LA OTRA ORILLA',
        category: 'MOTION GRAPHICS / VISUALIZERS',
        date: '2023',
        studio: '',
        role: '',
        canvasMode: 'glitch',
        media: [
            'https://www.youtube.com/embed/TeIseA78Jlg?si=wOWb3kctsCE-zvOA',
            'https://www.youtube.com/embed/JuzVUMo6jB4?si=4Y8KFd0_tAM5qM6U'
        ]
    },
    {
        id: 9,
        title: 'La Bonsai Orquesta ECLIPSADO / LADO OSCURO',
        category: 'MOTION GRAPHICS / VISUALIZERS',
        date: '2024',
        studio: '',
        role: '',
        canvasMode: 'glitch',
        media: [
            'https://www.youtube.com/embed/2AIE73mPJZc?si=eAwNW443wBIKei6X'
        ]
    },
    {
        id: 10,
        title: 'Amadeo - De olvido, de amor y de locura',
        category: 'MOTION GRAPHICS / VISUALIZERS',
        date: '2025',
        studio: '',
        role: '',
        canvasMode: 'glitch',
        media: [
            'https://www.youtube.com/embed/quBFQTeyPlU?si=PG69VkeS8H0MwiMC'
        ]
    },
    {
        id: 11,
        title: 'Ignacio Castellón -  a tus ojos: disecc i ó n_',
        category: 'MOTION GRAPHICS / VISUALIZERS',
        date: '2025',
        studio: '',
        role: '',
        canvasMode: 'glitch',
        media: [
            'https://www.youtube.com/embed/MtzdKM21MN0?si=-JYbO_q11PcIpmDs'
        ]
    },
    {
        id: 12,
        title: 'Zlatan Horses - Bosque Rojo',
        category: 'MOTION GRAPHICS / VISUALIZERS',
        date: '2026',
        studio: '',
        role: '',
        canvasMode: 'glitch',
        media: [
            'https://www.youtube.com/embed/q_aZLxNA_x8?si=wqWX4bmGVI-q54jf'
        ]
    },
    {
        id: 13,
        title: 'Ensoñación, diario de una pérdida',
        category: 'TEATRO',
        date: 'Artes Dramáticas UNA 2019',
        studio: '',
        role: 'Mariela Asensio',
        roleUrl: 'https://marielaasensio.com/',
        canvasMode: 'spectrum',
        mediaLayout: 'vertical',
        mediaFullBleed: true,
        mediaLimit: 15,
        compactLastYoutube: true,
        media: [
            './pantallas/img/diario%20de%20una%20perdida%20%281%29.webp',
            './pantallas/img/diario%20de%20una%20perdida%20%282%29.webp',
            './pantallas/img/diario%20de%20una%20perdida%20%283%29.webp',
            './pantallas/img/diario%20de%20una%20perdida%20%284%29.webp',
            './pantallas/img/diario%20de%20una%20perdida%20%285%29.webp',
            './pantallas/img/diario%20de%20una%20perdida%20%286%29.webp',
            './pantallas/img/diario%20de%20una%20perdida%20%287%29.webp',
            './pantallas/img/diario%20de%20una%20perdida%20%288%29.webp',
            './pantallas/img/diario%20de%20una%20perdida%20%289%29.webp',
            './pantallas/img/diario%20de%20una%20perdida%20%2810%29.webp',
            './pantallas/img/diario%20de%20una%20perdida%20%2811%29.webp',
            './pantallas/img/diario%20de%20una%20perdida%20%2812%29.webp',
            './pantallas/img/diario%20de%20una%20perdida%20%2813%29.webp',
            './pantallas/img/diario%20de%20una%20perdida%20%2814%29.webp',
            'https://www.youtube.com/embed/UtTep5Mp3kY?si=yCIAkMoEdwljtqd9'
        ]
    },
    {
        id: 14,
        title: 'Matar al Muerto',
        category: 'TEATRO',
        date: 'Microteatro 2019',
        studio: '',
        role: 'Mariela Asensio',
        roleUrl: 'https://marielaasensio.com/',
        canvasMode: 'spectrum',
        mediaLayout: 'vertical',
        media: [
            './pantallas/img/matar%20al%20muerto%20%283%29.webp',
            './pantallas/img/matar%20al%20muerto%20%281%29.webp',
            './pantallas/img/matar%20al%20muerto%20%284%29.webp',
            './pantallas/img/matar%20al%20muerto%20%282%29.webp'
        ]
    },
    {
        id: 15,
        title: 'Papá Bianco y los Alonso',
        category: 'TEATRO',
        date: 'Teatro del Pueblo, 2019',
        studio: '',
        role: 'Irina Alonso e Ingrid Pelicori',
        canvasMode: 'spectrum',
        mediaLayout: 'vertical',
        media: [
            './pantallas/img/papabianco01.webp',
            './pantallas/img/papa_bianco_02.webp'
        ]
    },
    {
        id: 16,
        title: 'Network',
        category: 'TEATRO',
        date: 'Teatro Coliseo 2022',
        studio: 'Maxi Vecco Estudio',
        role: '',
        canvasMode: 'spectrum',
        media: []
    },
    {
        id: 17,
        title: 'Caranchas',
        category: 'TEATRO',
        date: 'Area 623, 2025',
        studio: '',
        role: 'Francisco Barral, Lurdo Togneri',
        canvasMode: 'spectrum',
        media: []
    },
    {
        id: 18,
        title: '(SER) JAMES',
        category: 'TEATRO',
        date: 'Dumont 4040, 2026',
        studio: '',
        role: 'Juan Francisco Dasso, Julieta Desmarás, Belen Pasqualini',
        canvasMode: 'spectrum',
        media: []
    },
    {
        id: 19,
        title: 'JEIKO ESAMIBA',
        category: 'LIVE SETS AV',
        date: 'Panda Rojo Cultural, 2019',
        studio: 'independiente',
        role: '',
        canvasMode: 'spectrum',
        media: []
    },
    {
        id: 20,
        title: 'TempoFeroz Studio',
        category: 'LIVE SETS AV',
        date: 'Ramos Mejía, 2021 - 2022',
        studio: 'independiente',
        role: '',
        canvasMode: 'spectrum',
        media: [
            'https://www.youtube.com/embed/OBS_uMWux74?si=pnkEGDC7_pXNl4uF',
            'https://www.youtube.com/embed/TaKyNa0kfUI?si=hS5I13Sb0iu4rAMA',
            'https://www.youtube.com/embed/hKDIwrSqoEo?si=o2mNMW0nl84NrmLq'
        ]
    },
    {
        id: 21,
        title: '6706',
        category: 'LIVE SETS AV',
        date: 'Luján, 2025',
        studio: 'independiente',
        role: '',
        canvasMode: 'spectrum',
        media: [
            'https://www.youtube.com/embed/l6ypNIEZhwI?si=xzI0QU4gN7CVUWya'
        ]
    },
    {
        id: 22,
        title: 'Raves Parties Corp',
        category: 'OPERACIÓN EN VIVO',
        date: 'Groove, 2017 - 2018',
        studio: 'independiente',
        role: '',
        canvasMode: 'spectrum',
        media: [
            './pantallas/img/RPC%2002.webp',
            './pantallas/img/RPC%2001.webp'
        ]
    },
    {
        id: 23,
        title: 'Club Severino',
        category: 'OPERACIÓN EN VIVO',
        date: 'Uniclub, 2017 - 2018',
        studio: 'independiente',
        role: '',
        canvasMode: 'spectrum',
        media: [
            './pantallas/img/club%20severino%20%281%29.webp',
            './pantallas/img/club%20severino%20%282%29.webp'
        ]
    },
    {
        id: 24,
        title: 'Fuego de Vida',
        category: 'OPERACIÓN EN VIVO',
        date: 'Rodizio campo, febrero 2023',
        studio: 'independiente',
        role: '',
        canvasMode: 'spectrum',
        mediaLayout: 'vertical',
        moreLink: 'https://www.youtube.com/watch?v=4hJBkjOrEf0',
        media: [
            './pantallas/img/FDV%2001.webp',
            './pantallas/img/FDV%2002.webp',
            './pantallas/img/FDV%2003.webp',
            './pantallas/img/FDV%2004.webp',
            './pantallas/img/FDV%2005.webp'
        ]
    },
    {
        id: 25,
        title: 'Cazzu, Fiesta de la Vendimia',
        category: 'OPERACIÓN EN VIVO',
        date: 'Mendoza, Febrero 2023',
        studio: 'independiente',
        role: '',
        canvasMode: 'spectrum',
        media: [
            './pantallas/img/cazzu%2001.webp',
            './pantallas/img/cazzu%2002.webp'
        ]
    },
    {
        id: 26,
        title: 'Fluido Etéreo Tributo a Pink Floyd',
        category: 'OPERACIÓN EN VIVO',
        date: 'Teatro Municipal Trinidad Guevara Luján, 2024',
        studio: 'independiente',
        role: '',
        canvasMode: 'spectrum',
        mediaLayout: 'pairs',
        mediaFullBleed: true,
        media: [
            './pantallas/img/fluido%20etereo%2001.webp',
            './pantallas/img/fluido%20etereo%2002.webp',
            './pantallas/img/fluido%20etereo%2003.webp',
            './pantallas/img/fluido%20etereo%2004.webp',
            './pantallas/img/fluido%20etereo%2005.webp'
        ]
    },
    {
        id: 27,
        title: 'Yami Safdie - Gran Rex',
        category: 'OPERACIÓN EN VIVO',
        date: 'Teatro Gran Rex - Buenos Aires, 2025',
        studio: 'independiente',
        role: '',
        canvasMode: 'spectrum',
        media: []
    },
    {
        id: 28,
        title: 'Yami Safdie - Festival Bandera',
        category: 'OPERACIÓN EN VIVO',
        date: 'Hipódromo de Rosario, 2025',
        studio: 'independiente',
        role: '',
        canvasMode: 'spectrum',
        media: []
    },
    {
        id: 29,
        title: 'Los Vikings, El Homenaje',
        category: 'OPERACIÓN EN VIVO',
        date: 'Teatro Municipal Trinidad Guevara Luján, Mayo 2026',
        studio: 'independiente',
        role: '',
        canvasMode: 'grid',
        mediaLayout: 'vertical',
        mediaLimit: 9,
        media: [
            './pantallas/img/vikings%2001%20%285%29.webp',
            './pantallas/img/vikings%2001%20%288%29.webp',
            './pantallas/img/vikings%2001%20%284%29.webp',
            './pantallas/img/vikings%2001%20%286%29.webp',
            './pantallas/img/vikings%2001%20%287%29.webp',
            './pantallas/img/vikings%2001%20%283%29.webp',
            './pantallas/img/vikings%2001%20%282%29.webp',
            './pantallas/img/vikings%2001%20%281%29.webp',
            './pantallas/img/vikings%2002.webp'
        ]
    },
    {
        id: 51,
        title: 'Indian Beatles',
        category: 'OPERACIÓN EN VIVO',
        date: 'Teatro ND, 2019',
        studio: 'Indian Beatles',
        role: '',
        canvasMode: 'grid',
        mediaLayout: 'vertical',
        media: [
            './pantallas/img/indian%2002.webp',
            './pantallas/img/indian%2004.webp',
            './pantallas/img/indian%2003.webp',
            './pantallas/img/indian%2001.webp'
        ]
    },
    {
        id: 52,
        title: 'Viajes - Tener Lugar - Festival Futuros',
        category: 'OPERACIÓN EN VIVO',
        date: 'Centro Cultural Conti, 2019',
        studio: '',
        role: '',
        canvasMode: 'grid',
        mediaLayout: 'vertical',
        media: [
            './pantallas/img/viajes%20%281%29.webp',
            './pantallas/img/viajes%20%282%29.webp',
            './pantallas/img/viajes%20%283%29.webp',
            './pantallas/img/viajes%20%284%29.webp',
            './pantallas/img/viajes%20%285%29.webp',
            './pantallas/img/viajes%20%286%29.webp'
        ]
    },
    {
        id: 30,
        title: 'Mete Miedo (cine)',
        category: 'VIDEOINSTALACIÓN',
        date: '2021',
        studio: 'Del Toro Films',
        role: '',
        canvasMode: 'grid',
        media: []
    },
    {
        id: 31,
        title: 'Cuerpo en Construcción',
        category: 'VIDEOINSTALACIÓN',
        date: 'Espacio Caffarena, La Boca.',
        studio: 'Proyecto de Graduación U.N.A Artes Multimediales',
        role: '',
        canvasMode: 'grid',
        media: []
    },
    {
        id: 32,
        title: 'Estados Correlacionados',
        category: 'VIDEOINSTALACIÓN',
        date: 'DVNE PARK, Buenos Aires 2023',
        studio: 'Newtro',
        role: '',
        canvasMode: 'grid',
        media: [
            'https://www.youtube.com/embed/YAziiNVyDFo?si=95ipJ9KAbdkpCxZr'
        ]
    },
    {
        id: 33,
        title: 'Newtro x S.E.E.D',
        category: 'VIDEOINSTALACIÓN',
        date: 'Muito Radio, Buenos Aires 2024',
        studio: 'Newtro',
        role: '',
        canvasMode: 'grid',
        media: [
            'https://www.youtube.com/embed/I1tNN7iG8x8?si=s5srVEftiy0ixAW6'
        ]
    },
    {
        id: 34,
        title: 'Newtro AV Jam',
        category: 'VIDEOINSTALACIÓN',
        date: 'Artlab, Buenos Aires 2024',
        studio: 'Newtro',
        role: '',
        canvasMode: 'grid',
        media: []
    },
    {
        id: 35,
        title: 'Showmatch La Academia',
        category: 'PANTALLAS / DISEÑO Y REALIZACIÓN',
        date: 'Estudios Baires, 2021',
        studio: 'La Flia Contenidos',
        studioLabel: 'PRODUCTORA:',
        role: '',
        canvasMode: 'grid',
        media: []
    },
    {
        id: 36,
        title: 'Canta Conmigo Ahora',
        category: 'PANTALLAS / DISEÑO Y REALIZACIÓN',
        date: 'Estudios Baires, 2022',
        studio: 'La Flia Contenidos',
        studioLabel: 'PRODUCTORA:',
        role: '',
        canvasMode: 'grid',
        media: []
    },
    {
        id: 37,
        title: 'Interstellar 47 Street - Mich Kogan by chita',
        category: 'PANTALLAS / DISEÑO Y REALIZACIÓN',
        date: 'Febrero 2022',
        studio: '47 Street',
        studioLabel: 'PRODUCCIÓN:',
        role: '',
        canvasMode: 'grid',
        mediaLayout: 'vertical',
        media: [
            './pantallas/img/interstellar%2001.webp',
            './pantallas/img/interstellar%2002.webp',
            'https://www.youtube.com/embed/Q68Whsg8NTY?si=ztkdctQmmD1Nk12X'
        ]
    },
    {
        id: 38,
        title: 'Bailando 2023',
        category: 'PANTALLAS / DISEÑO Y REALIZACIÓN',
        date: 'Estudios Baires, 2023',
        studio: 'La Flia Contenidos',
        studioLabel: 'PRODUCTORA:',
        role: '',
        canvasMode: 'grid',
        media: []
    },
    {
        id: 39,
        title: 'No paramos de triunfar',
        category: 'PANTALLAS / DISEÑO Y REALIZACIÓN',
        date: 'City Center Rosario, diciembre 2023',
        studio: '',
        role: '',
        canvasMode: 'grid',
        media: []
    },
    {
        id: 40,
        title: 'Bizarrap - Coachella',
        category: 'PANTALLAS / DISEÑO Y REALIZACIÓN',
        date: 'INDIO California, abril 2024',
        studio: 'Maxi Vecco Studio',
        studioUrl: 'https://www.maxivecco.ar/',
        role: '',
        canvasMode: 'grid',
        mediaLayout: 'vertical',
        compactLastYoutube: true,
        media: [
            './pantallas/img/mamichula.mp4',
            './pantallas/img/cuando%20te%20veo.mp4',
            'https://www.youtube.com/embed/nIAhXQ3qqUA?si=OMWrfV0P5nXDR6W4'
        ]
    },
    {
        id: 41,
        title: 'Una navidad inolvidable Disney',
        category: 'PANTALLAS / DISEÑO Y REALIZACIÓN',
        date: 'Ciudad Universitaria, Buenos Aires Diciembre 2024',
        studio: 'Maxi Vecco Studio',
        studioUrl: 'https://www.maxivecco.ar/',
        role: '',
        canvasMode: 'grid',
        media: [
            'https://www.youtube.com/embed/qIlzWsRbGA0?si=7bK86tyfNr_eoVg8',
            'https://www.youtube.com/embed/NwZafmJWvv4?si=DOgC8S-59R3mey-f',
            'https://www.youtube.com/embed/2zu71O63r4s?si=tInhg9NLxLiyjfaP',
            'https://www.youtube.com/embed/odMYxujcPPQ?si=b9_vxJJ8XCteE5qg'
        ]
    },
    {
        id: 42,
        title: 'Noticias del amor Pimpinela Tour',
        category: 'PANTALLAS / DISEÑO Y REALIZACIÓN',
        date: '2025',
        studio: '',
        studioLabel: '',
        role: '',
        canvasMode: 'grid',
        mediaLayout: 'vertical',
        media: [
            './pantallas/img/pimpinela%2001.mp4',
            './pantallas/img/pimpinela%2002.mp4'
        ]
    },
    {
        id: 43,
        title: 'Xcel Music - Canddlelight - Crucero',
        category: 'PANTALLAS / DISEÑO Y REALIZACIÓN',
        date: 'Noviembre 2025',
        studio: 'Bazzalo Studio',
        studioUrl: 'https://www.luciobazzalo.com/',
        role: '',
        canvasMode: 'grid',
        mediaLayout: 'vertical',
        media: [
            './pantallas/img/Xcel%20Music%20Canddlelight%2001.webp',
            './pantallas/img/Xcel%20Music%20Canddlelight%2002.webp',
            './pantallas/img/Xcel%20Music%20Canddlelight%2003.webp',
            './pantallas/img/Xcel%20Music%20Canddlelight%2004.webp'
        ]
    },
    {
        id: 44,
        title: 'Hiko - Norwegian Luna',
        category: 'PANTALLAS / DISEÑO Y REALIZACIÓN',
        date: 'Buenos Aires - Venecia 2025 - 2026',
        studio: 'Bazzalo Studio',
        studioUrl: 'https://www.luciobazzalo.com/',
        role: '',
        canvasMode: 'grid',
        mediaLayout: 'vertical',
        media: [
            './pantallas/img/Hiko%2001.webp',
            './pantallas/img/Hiko%2002.webp'
        ]
    },
    {
        id: 45,
        title: 'Odesur - Apertura Juegos Olímpicos Suramericanos',
        category: 'PANTALLAS / DISEÑO Y REALIZACIÓN',
        date: 'Monumento a la Bandera - Rosario, Septiembre 2026',
        studio: 'Maxi Vecco Studio',
        studioUrl: 'https://www.maxivecco.ar/',
        role: '',
        canvasMode: 'grid',
        media: []
    },
    {
        id: 46,
        title: 'Museo Malvinas',
        category: 'VIDEOINSTALACIÓN',
        date: 'Avellaneda, 2025',
        studio: '',
        role: '',
        canvasMode: 'grid',
        media: [
            './pantallas/img/museo%20malvinas.webp',
            './pantallas/img/Instalacion%20malvinas.mp4'
        ]
    },
    {
        id: 49,
        title: 'Art On Tezos',
        category: 'VIDEOINSTALACIÓN',
        date: '2025',
        studio: 'Newtro',
        role: '',
        canvasMode: 'grid',
        media: []
    },
    {
        id: 50,
        title: 'Color del Sol - Sudan',
        category: 'VIDEOINSTALACIÓN',
        date: 'Niceto, 2019',
        studio: '',
        role: '',
        canvasMode: 'grid',
        media: []
    },
    {
        id: 47,
        title: 'Campari - Listos para ganar',
        category: 'MOTION GRAPHICS',
        date: '2025',
        studio: '',
        role: '',
        canvasMode: 'grid',
        mediaLayout: 'vertical',
        media: [
            './pantallas/img/camparistas.mp4',
            './pantallas/img/listos%20para%20ganar.mp4'
        ]
    },
    {
        id: 48,
        title: 'AZAR',
        category: 'LIVE SETS AV',
        date: 'Espacio Korova, 2023',
        studio: '',
        role: '',
        canvasMode: 'spectrum',
        mediaLayout: 'vertical',
        media: [
            './pantallas/img/azar%2001.mp4',
            './pantallas/img/azar%2002.mp4',
            './pantallas/img/azar%2006.mp4'
        ]
    }
];

function getStoredProjects() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (error) {
        return [];
    }
}

function clearStoredProjects() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        // No-op: no se puede persistir en este entorno.
    }
    return [];
}

function saveStoredProjects(projects) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}
