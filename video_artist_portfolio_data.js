const STORAGE_KEY = 'vjton_custom_projects_v1';
const defaultProjectsData = [
    {
        id: 3,
        title: 'Glitchcon - Twitch',
        category: 'MOTION GRAPHICS',
        date: 'Diciembre 2020',
        studio: 'Wolfpack Multimedia',
        role: '',
        canvasMode: 'glitch',
        mediaLayout: 'vertical',
        mediaFullBleed: true,
        mediaVideoFill: true,
        moreLink: 'https://www.twitch.tv/videos/800558240',
        projectInfo: [
            [
                'Animación 2D y Render - Wolfpack Multimedia'
            ],
            [
                [
                    { text: 'GlitchCon 2020', bold: true },
                    { text: ' fue un evento en línea y gratuito organizado por ' },
                    { text: 'Twitch', bold: true },
                    { text: ' el ' },
                    { text: '14 de noviembre de 2020', bold: true },
                    { text: ', creado como alternativa digital después de que la TwitchCon presencial fuera cancelada debido a la pandemia de COVID-19.' }
                ]
            ]
        ],
        media: [
            './pantallas/img/glitchcon%2001.webp',
            './pantallas/img/glitchcon%2002.webp',
            './pantallas/img/glitchcon%2003.webp',
            './pantallas/img/glitchcon%2004.jpg',
            'https://youtu.be/WKC3s1jWPVs'
        ]
    },
    {
        id: 4,
        title: 'HP CHINA',
        category: 'MOTION GRAPHICS',
        date: 'Abril - Mayo 2022',
        studio: 'Wolfpack Multimedia',
        role: '',
        canvasMode: 'glitch',
        mediaLayout: 'vertical',
        mediaFullBleed: true,
        mediaVideoFill: true,
        projectInfo: [
            [
                'Composición, Animación 2d, Kinetic Type y Render - Wolfpack Multimedia'
            ],
            [
                '3D > Laureano Santamaría'
            ],
            [
                'Lanzamiento de los modelos de Laptops OMEN (Hendricks) VICTUS (Roku) de la marca HP'
            ]
        ],
        media: [
            'https://youtu.be/ekB8Gyqr0xM',
            'https://youtu.be/Qg-1t3IaYiY'
        ]
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
        projectInfo: [
            [
                [
                    { text: 'En el marco de las acciones por el ' },
                    { text: '#8M', bold: true },
                    { text: ', Día Internacional de las Mujeres, el Fondo de Población de las Naciones Unidas (UNFPA) en Argentina presenta ' },
                    { text: '“bodyright”', bold: true },
                    { text: ', una nueva modalidad de derechos de autor para el cuerpo humano, para exigir protección frente a la ' },
                    { text: 'violencia de género digital', bold: true },
                    { text: ', junto a la artista ' },
                    { text: 'Chocolate Remix', bold: true, href: 'https://www.instagram.com/chocolateremix/' },
                    { text: '.' }
                ],
                [
                    { text: 'La campaña resalta que los logotipos empresariales y la propiedad intelectual sujeta a derechos de autor están mejor valorados y protegidos en Internet que las imágenes de los cuerpos de las personas. Y plantea que las mujeres y diversidades están expuestas a distintos tipos de violencia en línea, como el intercambio no consentido de imágenes íntimas, el doxing, el ciberhostigamiento, la persecución.' }
                ],
                [
                    { text: 'El objetivo es que las personas se unan al movimiento “bodyright” para que los organismos gubernamentales y las empresas del sector tecnológico, las plataformas, foros y redes sociales tomen en serio la violencia digital, intensifiquen sus esfuerzos y generen planes y programas para prevenirla y erradicarla.' }
                ],
                [
                    { text: 'Leer Más', href: 'https://argentina.unfpa.org/es/news/contra-la-violencia-de-g%C3%A9nero-digital-unfpa-propone-un-nuevo-copyright-para-el-cuerpo-humano' }
                ]
            ]
        ],
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
        projectInfo: [
            [
                'Diseño  y animación de piezas para Redes Sociales',
                [{ text: 'Fake It', href: 'https://fakeitclothes.com.ar/' }]
            ]
        ],
        media: [
            'https://www.youtube.com/embed/lARWDNjU5cU'
        ]
    },
    {
        id: 53,
        title: 'N6Z Clothing',
        category: 'MOTION GRAPHICS',
        date: '2022',
        studio: '',
        role: '',
        canvasMode: 'glitch',
        mediaFullBleed: true,
        mediaVideoFill: true,
        projectInfo: [
            [
                'Animación de Logo y Piezas para Redes Sociales.'
            ]
        ],
        media: [
            'https://youtu.be/cvUzRrsj3oE'
        ]
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
        projectInfo: [
            [
                'Animación, composición, Kinetic Type y Render para evento interno institucional de la marca Campari.'
            ]
        ],
        media: [
            'https://www.youtube.com/embed/PK1e8bXmj8I'
        ]
    },
    {
        id: 1,
        title: 'FIP Festival internacional de Poesía',
        category: 'MOTION GRAPHICS',
        date: 'CCK, 2018',
        studio: '',
        role: '',
        canvasMode: 'glitch',
        projectInfo: [
            [
                'Animación 2D para la difusión del encuentro internacional de Poesía llevado a cabo en el Centro Cultural Kirchner, Buenos Aires, 2018.'
            ]
        ],
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
        projectInfo: [
            [
                'Animación 2D'
            ],
            [
                'Los videos sobre reciclaje de aparatos eléctricos y electrónicos fueron producidos por la Oficina de País de la Organización Internacional del Trabajo para la Argentina, en el marco del proyecto "RAEE y empleo en la Argentina" (2019-2021)'
            ]
        ],
        media: [
            'https://www.youtube.com/embed/AN73_JDMD1g?si=kkKawfDVY7Eqpcgi'
        ]
    },
    {
        id: 7,
        title: 'Ca7riel EL DISKO',
        category: 'MOTION GRAPHICS',
        date: 'Noviembre, 2021',
        studio: '',
        role: '',
        canvasMode: 'glitch',
        mediaLayout: 'vertical',
        mediaLimit: 8,
        moreLink: 'https://youtu.be/6XY4MG2YP30?si=d16ZfIdYG0jhx1yl',
        mediaMoreLinkCentered: true,
        projectInfo: [
            [
                'Producción Musical: Tomy Sainz',
                'Mix: Nico Cotton',
                'Cover: Milton Sanz'
            ],
            [
                'Videolyrics A.I: Regina Ceii & MAJA',
                'Diseño Gráfico: AXXA',
                'Motion Graphics: t0n'
            ],
            [
                'Grabado en Buenos Aires - Argentina',
                'Entre diciembre de 2019 y agosto de 2021'
            ],
            [
                'Prod. Gral: Clix'
            ]
        ],
        media: [
            './pantallas/img/ca7riel%2001.webp',
            './pantallas/img/ca7riel%2002.webp',
            './pantallas/img/ca7riel%2003.webp',
            './pantallas/img/ca7riel%2004.webp',
            './pantallas/img/ca7riel%2005.webp',
            './pantallas/img/ca7riel%2006.webp',
            './pantallas/img/ca7riel%2007.webp'
        ]
    },
    {
        id: 13,
        title: 'Ensoñación, diario de una pérdida',
        category: 'TEATRO',
        categoryDetail: 'Diseño de video, técnica y operación en vivo',
        date: 'Artes Dramáticas UNA 2019',
        studio: '',
        role: 'Mariela Asensio',
        roleUrl: 'https://marielaasensio.com/',
        canvasMode: 'spectrum',
        mediaLayout: 'vertical',
        mediaFullBleed: true,
        mediaLimit: 15,
        moreLink: 'https://www.youtube.com/watch?v=UtTep5Mp3kY',
        mediaMoreLinkCentered: true,
        projectInfo: [
            [
                'Dramaturgia: Mariela Asensio',
                'Actúan: Denise Anzarut, Brenda Avila, Tamara Belenky, Josefina de Cara, Maru Del Medico, Ryan Della Sala - Grasa Guevara, Sofia Gonzalez Scheffer, Manuela Hernández, Lucas Marenco, Yamila Mayo, Julieta Panero, Regina Ryfenholz, Francisca Solari'
            ],
            [
                'Diseño de máscaras: Vessna Bebek, Ryan Della Sala - Grasa Guevara',
                'Diseño de vestuario: Vessna Bebek',
                'Diseño de escenografía: Marlene Lievendag, Micaela Sleigh',
                'Diseño de luces: Verónica Lanza',
                'Diseño visual: Santiago Brunatti, Tomas Serio',
                'Realización de escenografía: Emilio Muñoz'
            ],
            [
                'Realización de máscaras: Denise Anzarut, Vessna Bebek, Ryan Della Sala - Grasa Guevara, Manuela Hernández, Julieta Panero, Francisca Solari',
                'Operación técnica: Juan Ignacio Rossi',
                'Fotografía: Hernán Redondo',
                'Arte: Vessna Bebek',
                'Diseño gráfico: Ayelen Gallastegui, Lucas Marenco, Rujo Silvarredonda'
            ],
            [
                'Asistencia de iluminación: Moshe Maya Duarte',
                'Asistencia de dirección: César Riveros',
                'Arreglos musicales: Josefina de Cara',
                'Coreografía: Lucia Giannoni',
                'Dirección: Mariela Asensio'
            ],
            [
                'Agradecimientos: Ps Animaciones, Metrotelas, Daiana Antón, Hernán Colombo, Jacinta Egaña Kaulen, Hernán Kochman'
            ]
        ],
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
            './pantallas/img/diario%20de%20una%20perdida%20%2814%29.webp'
        ]
    },
    {
        id: 14,
        title: 'Matar al Muerto',
        category: 'TEATRO',
        categoryDetail: 'Diseño de Video y Proyecciones',
        date: 'Microteatro 2019',
        studio: '',
        role: 'Mariela Asensio',
        roleUrl: 'https://marielaasensio.com/',
        canvasMode: 'spectrum',
        mediaLayout: 'pairs',
        projectInfo: [
            [
                'Dramaturgia: Mariela Asensio',
                'Actúan: Clara Alonso, Paola Luttini, Barbie Vélez',
                'Vestuario: Panni Margot'
            ],
            [
                'Diseño audiovisual: Tomas Serio',
                'Fotografía: Rodrigo Serra',
                'Diseño gráfico: Rodrigo Serra',
                'Asistencia de dirección: Maria Julieta Prieto'
            ]
        ],
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
        categoryDetail: 'Operación de video en vivo y fotografía',
        date: 'Teatro del Pueblo, 2019',
        studio: '',
        role: 'Irina Alonso e Ingrid Pelicori',
        canvasMode: 'spectrum',
        mediaLayout: 'pairs-fit',
        projectInfo: [
            [
                'Dramaturgia: Irina Alonso, Ingrid Pelicori',
                'Actúan: Ángeles Alonso, Irina Alonso, Ingrid Pelicori',
                'Actores invitados: Manuel Callau, Pablo Caramelo, Osmar Nuñez, Horacio Peña',
                'Vestuario: Belén Pallotta',
                'Escenografía: Eva Córdova'
            ],
            [
                'Diseño de luces: Lucas Orchessi',
                'Diseño sonoro: Juan Pablo Maicas',
                'Edición de video: Ariel Cortina',
                'Operación de video: Tomás Serio',
                'Asistencia de dirección: Lucas Soriano'
            ],
            [
                'Arreglos musicales: Juan Pablo Maicas',
                'Diseño de movimientos: Veronica Litvak',
                'Dirección: Irina Alonso, Ingrid Pelicori'
            ]
        ],
        media: [
            './pantallas/img/papabianco01.webp',
            './pantallas/img/papa_bianco_02.webp'
        ]
    },
    {
        id: 16,
        title: 'Network',
        category: 'TEATRO',
        categoryDetail: 'Composición - Animación - Render',
        date: 'Teatro Coliseo 2022',
        studio: 'Maxi Vecco Estudio',
        studioUrl: 'https://www.maxivecco.ar/',
        role: '',
        canvasMode: 'spectrum',
        mediaLayout: 'vertical',
        projectInfo: [
            [
                'Elenco protagónico',
                'Florencia Peña',
                'Coco Sily',
                'Eduardo Blanco',
                'Cesar Bordón',
                'Pablo Rago',
                'Acompañados por más de 20 actores en escena'
            ],
            [
                'Ficha técnica',
                'Dirección general y puesta en escena: Corina Fiorillo',
                'Versión: Juan José Campanella',
                'Diseño de escenografía: Jorge Ferrari',
                'Diseño audiovisual: Maxi Vecco',
                'Diseño de luces: Ariel del Mastro',
                'Diseño de sonido: Gastón Briski',
                'Diseño de vestuario: Mercedes Colombo'
            ],
            [
                'Actores secundarios',
                'Ana Padilla, Angeles Clavijjo, Carlos Ledrag, Charlie Nieto, Gaby Ferrero, Juan Martín Calé, Julián Marcove, Leo Bosio, Mercedes Torre, Nacho De Santis, Pablo Palavecino, Pablo Covello, Roco Saenz, Santiago Lozano, Tomás Claudio.'
            ]
        ],
        media: [
            './pantallas/img/network%2005.png',
            './pantallas/img/network%2006.webp',
            './pantallas/img/network%2007.webp',
            './pantallas/img/network%2008.webp',
            './pantallas/img/network%2009.webp'
        ]
    },
    {
        id: 18,
        title: '(SER) JAMES',
        category: 'TEATRO',
        categoryDetail: 'Diseño de Proyecciones',
        date: 'Dumont 4040, 2026',
        studio: '',
        role: 'Juan Francisco Dasso, Julieta Desmarás, Belen Pasqualini',
        canvasMode: 'spectrum',
        mediaLayout: 'featured-trio',
        mediaLimit: 17,
        mediaFullBleed: true,
        moreLink: 'https://www.alternativateatral.com/obra101973-ser-james',
        mediaMoreLinkCentered: true,
        projectInfo: [
            [
                'Idea original: Belén Pasqualini',
                'Dramaturgia: Juan Francisco Dasso, Julieta Desmarás',
                'Actúan: Belén Pasqualini',
                'Estilismo: Juan Sayes',
                'Diseño de vestuario: Jade Ferrari, Zoel Gastou'
            ],
            [
                'Diseño de escenografía: Marlene Lievendag, Micaela Sleigh',
                'Diseño de luces: Mili Chaín',
                'Visuales: Tomás Serio',
                'Música: Belén Pasqualini',
                'Letras de canciones: Belén Pasqualini'
            ],
            [
                'Fotografía: Bruno Busnelli',
                'Mezcla: Hernán Ambrogi',
                'Asesoramiento coreográfico: Carla Rímola',
                'Asistencia musical: Cardinal Sur',
                'Prensa: Prensópolis'
            ],
            [
                'Diseño de producción: Mery Pastore Camino',
                'Producción: Belén Pasqualini',
                'Dirección: Juan Francisco Dasso, Julieta Desmarás, Belén Pasqualini'
            ]
        ],
        media: [
            './pantallas/img/ser%20james%2001.webp',
            './pantallas/img/ser%20james%2002.webp',
            './pantallas/img/ser%20james%2003.webp',
            './pantallas/img/ser%20james%2004.webp',
            './pantallas/img/ser%20james%2005.webp',
            './pantallas/img/ser%20james%2018.webp',
            './pantallas/img/ser%20james%2006.webp',
            './pantallas/img/ser%20james%2008.webp',
            './pantallas/img/ser%20james%2007.webp',
            './pantallas/img/ser%20james%2010.webp',
            './pantallas/img/ser%20james%2017.webp',
            './pantallas/img/ser%20james%2011.webp',
            './pantallas/img/ser%20james%2012.webp',
            './pantallas/img/ser%20james%2013.webp',
            './pantallas/img/ser%20james%2014.webp',
            './pantallas/img/ser%20james%2015.webp',
            './pantallas/img/ser%20james%2016.webp'
        ]
    },
    {
        id: 20,
        title: 'TempoFeroz Studio',
        category: 'LIVE SETS AV',
        date: 'Ramos Mejía, 2021 - 2022',
        studio: '',
        studioLabel: '',
        role: '',
        canvasMode: 'spectrum',
        mediaLayout: 'vertical',
        projectInfo: [
            [
                'Canal de creación y divulgación Artística que une música ejecutada en vivo y visuales en tiempo real.'
            ],
            [
                'Sets realizados >',
                'IVAN KII Magiclick',
                'El Piyi y sus inéditos del ruidismo',
                'Mantrixa - Cybercontrol'
            ]
        ],
        moreLink: 'https://www.youtube.com/watch?v=TaKyNa0kfUI',
        mediaMoreLinkCentered: true,
        media: [
            'https://www.youtube.com/embed/OBS_uMWux74?si=pnkEGDC7_pXNl4uF',
            'https://www.youtube.com/embed/hKDIwrSqoEo?si=o2mNMW0nl84NrmLq'
        ]
    },
    {
        id: 21,
        title: '6706',
        category: 'LIVE SETS AV',
        date: 'Luján, 2025',
        studio: '',
        studioLabel: '',
        role: '',
        canvasMode: 'spectrum',
        projectInfo: [
            [
                'Piloto de canal de sets audiovisuales.'
            ]
        ],
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
        projectInfo: [
            [
                'Técnica y Operación de pantallas en Groove, Buenos Aires,  2017 y 2018.'
            ]
        ],
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
        projectInfo: [
            [
                'Técnica y Operación de pantallas en Uniclub Buenos Aires 2017-2018 para la fiesta Club Severino.'
            ]
        ],
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
        projectInfo: [
            [
                'Operación de video en vivo para el festival Fuego de Vida, realizado en Rodizio Campo, Luján, Febrero 2023.'
            ],
            [
                "DJ's > Mai Lawson, Kamilo Sanclemente"
            ],
            [
                'Registro de video > Wallistation'
            ]
        ],
        media: [
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
        projectInfo: [
            [
                [
                    { text: '@cazzu', href: 'https://www.instagram.com/cazzu/?hl=es' },
                    { text: ' Fiesta de la Vendimia🕸NENATRAMPA TOUR 🕷' }
                ]
            ],
            [
                'TeamWork',
                [
                    { text: '@reginaceii', href: 'https://www.instagram.com/reginaceii/?hl=es' }
                ],
                [
                    { text: '@______maja', href: 'https://www.instagram.com/______maja/?hl=es' }
                ],
                [
                    { text: '@astridmicaela', href: 'https://www.instagram.com/astridmicaela/?hl=es' }
                ],
                [
                    { text: '@pollo_on_road_working', href: 'https://www.instagram.com/pollo_on_road_working/?hl=es' }
                ],
                [
                    { text: '@marce_source', href: 'https://www.instagram.com/marce_source/?hl=es' }
                ],
                [
                    { text: '@mpiraola', href: 'https://www.instagram.com/mpiraola/?hl=es' }
                ],
                [
                    { text: '@lamoraselli', href: 'https://www.instagram.com/lamoraselli/?hl=es' }
                ],
                [
                    { text: '@ddddanzi', href: 'https://www.instagram.com/ddddanzi/?hl=es' }
                ]
            ]
        ],
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
        projectInfo: [
            [
                '⚙ WELCOME TO THE MACHINE ⚙',
                [
                    { text: '@fluidoetereo', href: 'https://www.instagram.com/fluidoetereo/?hl=es' },
                    { text: ' en ' },
                    { text: '@teatrotrinidadguevara', href: 'https://www.instagram.com/teatrotrinidadguevara/?hl=es' }
                ],
                [
                    { text: '@emibilello', href: 'https://www.instagram.com/emibilello/?hl=es' },
                    { text: ' 🎸' }
                ],
                [
                    { text: '@nacho.kobal', href: 'https://www.instagram.com/nacho.kobal/?hl=es' },
                    { text: ' 🥁' }
                ],
                [
                    { text: '@agusgrezzi', href: 'https://www.instagram.com/agusgrezzi/?hl=es' },
                    { text: ' 🎸🎤' }
                ],
                [
                    { text: '@nanooksonriendo', href: 'https://www.instagram.com/nanooksonriendo/?hl=es' },
                    { text: ' 🎙' }
                ],
                [
                    { text: '@juliett.ta', href: 'https://www.instagram.com/juliett.ta/?hl=es' },
                    { text: ' ' },
                    { text: '@mailenseg', href: 'https://www.instagram.com/mailenseg/?hl=es' },
                    { text: ' 🎤🎤' }
                ],
                [
                    { text: '@cristiangodard', href: 'https://www.instagram.com/cristiangodard/?hl=es' },
                    { text: ' 🎸' }
                ],
                [
                    { text: '@davidbilello_', href: 'https://www.instagram.com/davidbilello_/?hl=es' },
                    { text: ' 🎹' }
                ],
                [
                    { text: '@bebogarralda', href: 'https://www.instagram.com/bebogarralda/?hl=es' },
                    { text: ' 🎹' }
                ],
                [
                    { text: '@lautaroriccardo', href: 'https://www.instagram.com/lautaroriccardo/?hl=es' },
                    { text: ' 🎷' }
                ],
                [
                    { text: '@juanoozabalza', href: 'https://www.instagram.com/juanoozabalza/?hl=es' },
                    { text: ' 🎛 🔊' }
                ],
                [
                    { text: '@agusrivee', href: 'https://www.instagram.com/agusrivee/?hl=es' },
                    { text: ' 🎚🔊' }
                ],
                [
                    { text: '@gos.tita', href: 'https://www.instagram.com/gos.tita/?hl=es' },
                    { text: ' 📷' }
                ],
                [
                    { text: '@vj.t0n', href: 'https://www.instagram.com/vj.t0n/?hl=es' },
                    { text: ' 📽📺' }
                ],
                [
                    { text: '@paulot_74', href: 'https://www.instagram.com/paulot_74/?hl=es' },
                    { text: ' 💡' }
                ]
            ]
        ],
        media: [
            './pantallas/img/fluido%20etereo%2001.webp',
            './pantallas/img/fluido%20etereo%2002.webp',
            './pantallas/img/fluido%20etereo%2003.webp',
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
        categoryDetail: 'Realización y operación de pantallas',
        mediaLayout: 'pairs',
        projectInfo: [
            [
                'Team:',
                [
                    { text: 'Manager ' },
                    { text: '@ornedevir', href: 'https://www.instagram.com/ornedevir/' }
                ],
                [
                    { text: 'Music: ' },
                    { text: '@nicosamarti', href: 'https://www.instagram.com/nicosamarti/' },
                    { text: ' majestic in the production and musical direction of the show.' }
                ],
                [
                    { text: '@gusdamianledesma', href: 'https://www.instagram.com/gusdamianledesma/' },
                    { text: ' making it sound flawless.' }
                ],
                'Those who make everything tangible and possible.',
                [
                    { text: '@daniladevirgilio', href: 'https://www.instagram.com/daniladevirgilio/' },
                    { text: ' ' },
                    { text: '@ina_corral', href: 'https://www.instagram.com/ina_corral/' },
                    { text: ' ' },
                    { text: '@livedadeplay', href: 'https://www.instagram.com/livedadeplay/' }
                ],
                [
                    { text: '@valulozanoJ', href: 'https://www.instagram.com/valulozanoJ/' },
                    { text: ' ' },
                    { text: '@pituu.barrientos', href: 'https://www.instagram.com/pituu.barrientos/' }
                ]
            ],
            [
                'Artistic Team:',
                [
                    { text: 'Art: ' },
                    { text: '@helemuni_', href: 'https://www.instagram.com/helemuni_/' },
                    { text: ' ' },
                    { text: '@rdvdecodesign_', href: 'https://www.instagram.com/rdvdecodesign_/' },
                    { text: ' ' },
                    { text: '@paulaplusca', href: 'https://www.instagram.com/paulaplusca/' }
                ],
                [
                    { text: '@ludmilasonez', href: 'https://www.instagram.com/ludmilasonez/' },
                    { text: ' warmth and motherly love present.' }
                ],
                [
                    { text: 'Wardrobe and Stylist: ' },
                    { text: '@ichuamendolara', href: 'https://www.instagram.com/ichuamendolara/' },
                    { text: ' ' },
                    { text: '@magustyle_', href: 'https://www.instagram.com/magustyle_/' }
                ],
                [
                    { text: '@arizappa.arte', href: 'https://www.instagram.com/arizappa.arte/' },
                    { text: ' ' },
                    { text: '@____ambar____', href: 'https://www.instagram.com/____ambar____/' }
                ],
                [
                    { text: 'Screens: ' },
                    { text: '@vj.t0n', href: 'https://www.instagram.com/vj.t0n/' }
                ],
                'Lights: Pablo',
                [
                    { text: 'Design: ' },
                    { text: '@illusbyio', href: 'https://www.instagram.com/illusbyio/' }
                ],
                [
                    { text: 'Vocal coach: ' },
                    { text: '@florlovagliook', href: 'https://www.instagram.com/florlovagliook/' }
                ],
                [
                    { text: 'Band: ' },
                    { text: '@martinaboixader', href: 'https://www.instagram.com/martinaboixader/' },
                    { text: ' ' },
                    { text: '@camipesce_', href: 'https://www.instagram.com/camipesce_/' }
                ],
                [
                    { text: '@marianogomezpercusion', href: 'https://www.instagram.com/marianogomezpercusion/' },
                    { text: ' ' },
                    { text: '@martinsciaccaluga', href: 'https://www.instagram.com/martinsciaccaluga/' }
                ],
                [
                    { text: '@fedecellest', href: 'https://www.instagram.com/fedecellest/' },
                    { text: ' ' },
                    { text: '@valensicaaa', href: 'https://www.instagram.com/valensicaaa/' },
                    { text: ' ' },
                    { text: '@quinogutt', href: 'https://www.instagram.com/quinogutt/' },
                    { text: ' ' },
                    { text: '@matiasbahillo', href: 'https://www.instagram.com/matiasbahillo/' }
                ],
                [
                    { text: '@lucasbenbateria_', href: 'https://www.instagram.com/lucasbenbateria_/' },
                    { text: ' ' },
                    { text: '@agustin.boria', href: 'https://www.instagram.com/agustin.boria/' },
                    { text: ' ' },
                    { text: '@alanortemusica', href: 'https://www.instagram.com/alanortemusica/' }
                ],
                [
                    { text: '@ricky_rolldan', href: 'https://www.instagram.com/ricky_rolldan/' }
                ]
            ]
        ],
        media: [
            './pantallas/img/yami%2001.webp',
            './pantallas/img/yami%2002.webp',
            './pantallas/img/yami%20gran%20rex%2001.webp',
            './pantallas/img/yami%20gran%20rex%2002.webp'
        ]
    },
    {
        id: 28,
        title: 'Yami Safdie - Festival Bandera',
        category: 'OPERACIÓN EN VIVO',
        date: 'Hipódromo de Rosario, 2025',
        studio: 'independiente',
        role: '',
        canvasMode: 'spectrum',
        mediaLayout: 'vertical',
        mediaVideoFill: true,
        projectInfo: [
            [
                'Team:',
                [
                    { text: 'Manager ' },
                    { text: '@ornedevir', href: 'https://www.instagram.com/ornedevir/' }
                ],
                [
                    { text: 'Music: ' },
                    { text: '@nicosamarti', href: 'https://www.instagram.com/nicosamarti/' },
                    { text: ' majestic in the production and musical direction of the show.' }
                ],
                [
                    { text: '@gusdamianledesma', href: 'https://www.instagram.com/gusdamianledesma/' },
                    { text: ' making it sound flawless.' }
                ],
                'Those who make everything tangible and possible.',
                [
                    { text: '@daniladevirgilio', href: 'https://www.instagram.com/daniladevirgilio/' },
                    { text: ' ' },
                    { text: '@ina_corral', href: 'https://www.instagram.com/ina_corral/' },
                    { text: ' ' },
                    { text: '@livedadeplay', href: 'https://www.instagram.com/livedadeplay/' }
                ],
                [
                    { text: '@valulozanoJ', href: 'https://www.instagram.com/valulozanoJ/' },
                    { text: ' ' },
                    { text: '@pituu.barrientos', href: 'https://www.instagram.com/pituu.barrientos/' }
                ]
            ],
            [
                'Artistic Team:',
                [
                    { text: 'Art: ' },
                    { text: '@helemuni_', href: 'https://www.instagram.com/helemuni_/' },
                    { text: ' ' },
                    { text: '@rdvdecodesign_', href: 'https://www.instagram.com/rdvdecodesign_/' },
                    { text: ' ' },
                    { text: '@paulaplusca', href: 'https://www.instagram.com/paulaplusca/' }
                ],
                [
                    { text: '@ludmilasonez', href: 'https://www.instagram.com/ludmilasonez/' },
                    { text: ' warmth and motherly love present.' }
                ],
                [
                    { text: 'Wardrobe and Stylist: ' },
                    { text: '@ichuamendolara', href: 'https://www.instagram.com/ichuamendolara/' },
                    { text: ' ' },
                    { text: '@magustyle_', href: 'https://www.instagram.com/magustyle_/' }
                ],
                [
                    { text: '@arizappa.arte', href: 'https://www.instagram.com/arizappa.arte/' },
                    { text: ' ' },
                    { text: '@____ambar____', href: 'https://www.instagram.com/____ambar____/' }
                ],
                [
                    { text: 'Screens: ' },
                    { text: '@vj.t0n', href: 'https://www.instagram.com/vj.t0n/' }
                ],
                'Lights: Pablo',
                [
                    { text: 'Design: ' },
                    { text: '@illusbyio', href: 'https://www.instagram.com/illusbyio/' }
                ],
                [
                    { text: 'Vocal coach: ' },
                    { text: '@florlovagliook', href: 'https://www.instagram.com/florlovagliook/' }
                ],
                [
                    { text: 'Band: ' },
                    { text: '@martinaboixader', href: 'https://www.instagram.com/martinaboixader/' },
                    { text: ' ' },
                    { text: '@camipesce_', href: 'https://www.instagram.com/camipesce_/' }
                ],
                [
                    { text: '@marianogomezpercusion', href: 'https://www.instagram.com/marianogomezpercusion/' },
                    { text: ' ' },
                    { text: '@martinsciaccaluga', href: 'https://www.instagram.com/martinsciaccaluga/' }
                ],
                [
                    { text: '@fedecellest', href: 'https://www.instagram.com/fedecellest/' },
                    { text: ' ' },
                    { text: '@valensicaaa', href: 'https://www.instagram.com/valensicaaa/' },
                    { text: ' ' },
                    { text: '@quinogutt', href: 'https://www.instagram.com/quinogutt/' },
                    { text: ' ' },
                    { text: '@matiasbahillo', href: 'https://www.instagram.com/matiasbahillo/' }
                ],
                [
                    { text: '@lucasbenbateria_', href: 'https://www.instagram.com/lucasbenbateria_/' },
                    { text: ' ' },
                    { text: '@agustin.boria', href: 'https://www.instagram.com/agustin.boria/' },
                    { text: ' ' },
                    { text: '@alanortemusica', href: 'https://www.instagram.com/alanortemusica/' }
                ],
                [
                    { text: '@ricky_rolldan', href: 'https://www.instagram.com/ricky_rolldan/' }
                ]
            ]
        ],
        media: [
            './pantallas/img/Yami-Safdie%20bandera%2001.webp',
            './pantallas/img/Yami-Safdie%20bandera%2002.webp',
            'https://youtu.be/-eFrkCIgLJk?si=5NMl5j380fLlqcz6'
        ]
    },
    {
        id: 29,
        title: 'Los Vikings, El Homenaje',
        category: 'OPERACIÓN EN VIVO',
        categoryDetail: 'Composición, Animación y Render',
        date: 'Teatro Municipal Trinidad Guevara Luján, Mayo 2026',
        studio: 'independiente',
        role: '',
        canvasMode: 'grid',
        mediaLayout: 'vertical-pairs',
        mediaLimit: 18,
        mediaPairStart: 8,
        projectInfo: [
            [
                'MÚSICOS',
                [{ text: '🎸' }, { text: '@daniredcolo', href: 'https://www.instagram.com/daniredcolo/' }],
                [{ text: '🎸' }, { text: '@eduardorosso47', href: 'https://www.instagram.com/eduardorosso47/' }],
                [{ text: '🎸' }, { text: '@agus__rosso', href: 'https://www.instagram.com/agus__rosso/' }],
                [{ text: '🎸' }, { text: '@dargnr197', href: 'https://www.instagram.com/dargnr197/' }],
                [{ text: '🥁' }, { text: '@estebanlerman', href: 'https://www.instagram.com/estebanlerman/' }],
                [{ text: '🎹' }, { text: '@salvoblasramon', href: 'https://www.instagram.com/salvoblasramon/' }],
                [{ text: '🎙' }, { text: '@feddylucaseleterno', href: 'https://www.instagram.com/feddylucaseleterno/' }],
                [{ text: '🎺' }, { text: '@sergiochibel', href: 'https://www.instagram.com/sergiochibel/' }],
                [{ text: '🎷' }, { text: '@matiaschibel', href: 'https://www.instagram.com/matiaschibel/' }],
                [{ text: '🪘' }, { text: '@marcos_more_martinez', href: 'https://www.instagram.com/marcos_more_martinez/' }]
            ],
            [
                'SPONSORS',
                [{ text: '@icelandhelados', href: 'https://www.instagram.com/icelandhelados/' }],
                [{ text: '@somos.guanacos', href: 'https://www.instagram.com/somos.guanacos/' }],
                [{ text: '@cinema.rosso', href: 'https://www.instagram.com/cinema.rosso/' }]
            ],
            [
                [{ text: '🎚SONIDO: ' }, { text: '@juanoozabalza', href: 'https://www.instagram.com/juanoozabalza/' }, { text: ' ' }, { text: '@agusrivee', href: 'https://www.instagram.com/agusrivee/' }],
                [{ text: '🌐 PRODUCCIÓN GRAL: ' }, { text: '@agus__rosso', href: 'https://www.instagram.com/agus__rosso/' }],
                [{ text: '🎤LOCUCIÓN: ' }, { text: '@jorgealbertoliguori', href: 'https://www.instagram.com/jorgealbertoliguori/' }],
                [{ text: '🖥 PANTALLA : ' }, { text: '@screenled_', href: 'https://www.instagram.com/screenled_/' }],
                [{ text: '📹DIRECCIÓN DE CÁMARAS - EDICIÓN y CCTV ' }, { text: '@gunkzafilms', href: 'https://www.instagram.com/gunkzafilms/' }],
                [{ text: '📹ASISTENTES DE CÁMARAS ' }, { text: '@maran_gone', href: 'https://www.instagram.com/maran_gone/' }, { text: ' ' }, { text: '@hugobarbizan_filmmaker', href: 'https://www.instagram.com/hugobarbizan_filmmaker/' }, { text: ' - ' }, { text: '@agustagne', href: 'https://www.instagram.com/agustagne/' }],
                [{ text: '🎛 REALIZACIÓN Y OPERACIÓN DE PANTALLAS : ' }, { text: '@vj.t0n', href: 'https://www.instagram.com/vj.t0n/' }],
                [{ text: '🖍DISEÑO GRAFICO: ' }, { text: '@mantradc', href: 'https://www.instagram.com/mantradc/' }],
                [{ text: '💡ILUMINACIÓN: ' }, { text: '@paulot_74', href: 'https://www.instagram.com/paulot_74/' }],
                [{ text: '📷 FOTOGRAFÍA: ' }, { text: '@indiestinto_', href: 'https://www.instagram.com/indiestinto_/' }],
                [{ text: '🪛STAGE: ' }, { text: '@dobledobleve.ww', href: 'https://www.instagram.com/dobledobleve.ww/' }, { text: ' - ' }, { text: '@juliandmn_', href: 'https://www.instagram.com/juliandmn_/' }, { text: ' - ' }, { text: '@sin.curitas', href: 'https://www.instagram.com/sin.curitas/' }],
                [{ text: '👔 INDUMENTARIA: ' }, { text: '@belleatelier_lujan', href: 'https://www.instagram.com/belleatelier_lujan/' }],
                [{ text: '🎚BACKLINE: ' }, { text: '@delta_sonido_backline', href: 'https://www.instagram.com/delta_sonido_backline/' }],
                [{ text: '🏷 ACCESORIOS: ' }, { text: '@ferdelmusic', href: 'https://www.instagram.com/ferdelmusic/' }]
            ]
        ],
        media: [
            './pantallas/img/vikings%2001%20%285%29.webp',
            './pantallas/img/vikings%2001%20%288%29.webp',
            './pantallas/img/vikings%2001%20%284%29.webp',
            './pantallas/img/vikings%2001%20%286%29.webp',
            './pantallas/img/vikings%2001%20%287%29.webp',
            './pantallas/img/vikings%2001%20%283%29.webp',
            './pantallas/img/vikings%2001%20%282%29.webp',
            './pantallas/img/vikings%2001%20%281%29.webp',
            './pantallas/img/vikings%2002.webp',
            './pantallas/img/vikings%2003.webp',
            './pantallas/img/vikings%2004.webp',
            './pantallas/img/vikings%2005.png',
            './pantallas/img/vikings%2006.webp',
            './pantallas/img/vikings%2007.webp',
            './pantallas/img/vikings%2008.webp',
            './pantallas/img/vikings%2009.webp',
            './pantallas/img/vikings%2010.webp',
            './pantallas/img/vikings%2011.webp'
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
        projectInfo: [
            [
                'Operación y realización de Proyecciones para el espectáculo Indian Beatles realizado en el año 2019 en ND Teatro, Buenos Aires. Con la participación especial de Hila Liza Lizarazu'
            ],
            [
                [
                    { text: "India'n Beatles", bold: true },
                    { text: ' es un espectáculo de danza y música clásica de la India inspirado en la legendaria banda The Beatles. ' },
                    { text: 'Ver más', href: 'https://www.alternativateatral.com/obra25344-indian-beatles' }
                ]
            ]
        ],
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
        projectInfo: [
            [
                'Presentación audiovisual del disco Tener Lugar de Viajes en el Centro Cultural Conti, año 2019.'
            ],
            [
                'Creación y operación de visuales: t0n'
            ],
            [
                'Registro: Gunkza Films'
            ]
        ],
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
        categoryDetail: 'Técnica en Pantallas',
        date: '2021',
        studio: 'Del Toro Films',
        studioUrl: 'https://www.deltorofilms.com.ar/',
        role: '',
        canvasMode: 'grid',
        mediaLayout: 'vertical',
        mediaLimit: 12,
        projectInfo: [
            [
                'Instalación y reproducción de monitores de signos vitales.',
                'Set de rodaje del film Mete Miedo.'
            ]
        ],
        media: [
            './pantallas/img/mete%20miedo%2001.webp',
            './pantallas/img/mete%20miedo%2002.webp',
            './pantallas/img/mete%20miedo%2003.webp',
            './pantallas/img/mete%20miedo%2004.webp',
            './pantallas/img/mete%20miedo%2005.webp',
            './pantallas/img/mete%20miedo%2006.webp',
            './pantallas/img/mete%20miedo%2007.webp',
            './pantallas/img/mete%20miedo%2008.webp',
            './pantallas/img/mete%20miedo%2009.webp',
            './pantallas/img/mete%20miedo%2010.webp',
            './pantallas/img/mete%20miedo%2011.webp',
            './pantallas/img/mete%20miedo%2012.webp'
        ]
    },
    {
        id: 31,
        title: 'Cuerpo en Construcción',
        category: 'VIDEOINSTALACIÓN',
        date: 'Espacio Caffarena, La Boca.',
        studio: 'Proyecto de Graduación U.N.A Artes Multimediales',
        role: '',
        canvasMode: 'grid',
        categoryDetail: 'Dirección y Autoría',
        mediaLayout: 'vertical',
        mediaFullBleed: true,
        mediaVideoFill: true,
        mediaLimit: 11,
        moreLink: 'https://una.edu.ar/noticias/se-presento-el-proyecto-de-graduacion-cuerpo-en-construccion-de-artes-multimediales-en-el_40884',
        projectInfo: [
            [
                'Cuerpo en construcción es una videoinstalación multicanal.',
                'Construye un cuerpo andrógino a gran escala a partir de fragmentos y recortes de cuerpos humanos.',
                'Es un híbrido de sexos asimétrico, un cuerpo nuevo, tecnológico, mutante, errático y disfuncional.',
                'Posee fallas, intenta que sus partes dialoguen pero no lo logra.',
                'Las interferencias denotan su intento por formar un cuerpo completo y armónico.',
                'Es la fábrica de un cuerpo en proceso de construcción.'
            ],
            [
                'Autoría y Dirección: Tomás Serio',
                'Director de Proyecto: Gumersindo Serrano Gómez',
                'Equipo de Sistema: Rodrigo A. Pizarro, Santiago Brunati',
                'Equipo de Montaje: Martín Grattone, Agustín Rosso, Julián Domenech',
                'Técnico de Sala: Alejandro Rodas'
            ]
        ],
        media: [
            './pantallas/img/cuerpo%2001.webp',
            './pantallas/img/cuerpo%2002.webp',
            './pantallas/img/cuerpo%2003.webp',
            './pantallas/img/cuerpo%2004.webp',
            './pantallas/img/cuerpo%2005.webp',
            './pantallas/img/cuerpo%2006.webp',
            './pantallas/img/cuerpo%2007.webp',
            './pantallas/img/cuerpo%2008.webp',
            './pantallas/img/CUERPO%2009.webp',
            './pantallas/img/CUERPO%2010.webp',
            'https://youtu.be/PYRIev4s0VU'
        ]
    },
    {
        id: 32,
        title: 'Estados Correlacionados',
        category: 'VIDEOINSTALACIÓN',
        categoryDetail: 'Técnica en video',
        date: 'DVNE PARK, Buenos Aires 2023',
        studio: 'Newtro',
        studioUrl: 'https://newtro.xyz/',
        role: '',
        canvasMode: 'grid',
        projectInfo: [
            [
                'CURATED BY',
                'Jotta',
                '@jotta_rs',
                'Sky Goodman',
                '@SkyGoodman4',
                'Lucas Sosa',
                '@lucasoxx_'
            ],
            [
                'EXHIBITING ART FROM',
                '@noistruct @bbywacha @gregorianash @koi.555 @sulkian',
                '@alfacenttauri @d3mo @laurabutallo @jotta_rs @sebacestaro',
                '@vidalherrerv @bosquegracias @durumbreaks @hypereikon',
                '@lucasoxx_ @SkyGoodman4 @andreoliveira.cebola'
            ],
            [
                'INSTALLATION CREATED BY'
            ],
            [
                'ART AND MATERIALITY',
                '@turmalinacuatica @tinanarrative @juanapucheu'
            ],
            [
                'TECHNICAL TEAM',
                '@zoen_calega @digitalcapo @mati.mast @vj.t0n'
            ],
            [
                'ELECTRONICS TEAM',
                '@coiron_electronico @umachinita'
            ],
            [
                'MYSTICAL STAGE',
                '@marriots_ @florprato @effe.cinco @vtt.julie'
            ],
            [
                'LIGHTING TEAM',
                '@colodeeon'
            ],
            [
                '“PLANTA KINETICA”',
                '@andygalano @andervallejolarre @rrroosi'
            ],
            [
                'SUPPORTED BY',
                '@refractionfestival EnergyDAO @our.zora',
                '@eyejackapp @optimism_collective @ekoa_unlp'
            ]
        ],
        media: [
            'https://www.youtube.com/embed/YAziiNVyDFo?si=95ipJ9KAbdkpCxZr'
        ]
    },
    {
        id: 33,
        title: 'Newtro x S.E.E.D',
        category: 'VIDEOINSTALACIÓN',
        categoryDetail: 'Técnica en video',
        date: 'Muito Radio, Buenos Aires 2024',
        studio: 'Newtro',
        studioUrl: 'https://newtro.xyz/',
        role: '',
        canvasMode: 'grid',
        projectInfo: [
            [
                'GENERAL COORDINATION OF NEWTRO',
                'Bulls, Lucasoxx y Chanaland'
            ],
            [
                'GENERAL COORDINATION OF SEED',
                'Gabriel Kōi y Daniel Junqueira',
                'The general production of the event was self-managed by the artists of the collective.'
            ],
            [
                'SCREENS INSTALLATION SETUP',
                'Lucasoxx, Zoen, Jotta.rs, T0n'
            ],
            [
                'ART DIRECTION',
                'Aura, Lázaro, Mafin, Leiny'
            ],
            [
                'COLLABORATORS ON SET',
                'Chamaland, Luppl, Martinjoss, Oscar Málaga, Bulls, Grotezca, NejoOut, Kaëu Esuna, qabqabqab, elbi, Fenzor, KÖI, SPIRITUALDEVILS, Daniel Junqueira, THAÏS'
            ],
            [
                'LIGHTING',
                'Effe Cinco, Colorama, Tris'
            ],
            [
                'AV PRODUCTION',
                'Denian Rosales',
                'Camera',
                'Cosme Andaluz, Denian Rosales',
                'Edition, Color and vfx',
                'Fernando Ahumada'
            ]
        ],
        media: [
            'https://www.youtube.com/embed/I1tNN7iG8x8?si=s5srVEftiy0ixAW6'
        ]
    },
    {
        id: 34,
        title: 'Newtro AV Jam',
        category: 'VIDEOINSTALACIÓN',
        categoryDetail: 'Técnica en Video',
        date: 'Artlab, Buenos Aires 2024',
        studio: 'Newtro',
        studioUrl: 'https://newtro.xyz/',
        role: '',
        canvasMode: 'grid',
        projectInfo: [
            [
                'Video team',
                [{ text: '@awesobico', href: 'https://www.instagram.com/awesobico/?hl=es' }, { text: ' ' }, { text: '@zoen_calega', href: 'https://www.instagram.com/zoen_calega/?hl=es' }, { text: ' ' }, { text: '@lucasoxx_', href: 'https://www.instagram.com/lucasoxx_/?hl=es' }, { text: ' ' }, { text: '@vj.t0n', href: 'https://www.instagram.com/vj.t0n/?hl=es' }]
            ],
            [
                'Audio team',
                [{ text: '@disqtible', href: 'https://www.instagram.com/disqtible/?hl=es' }, { text: ' ' }, { text: '@nivvvo', href: 'https://www.instagram.com/nivvvo/?hl=es' }, { text: ' ' }, { text: '@sulkian', href: 'https://www.instagram.com/sulkian/?hl=es' }, { text: ' ' }, { text: '@franmandon', href: 'https://www.instagram.com/franmandon/?hl=es' }]
            ],
            [
                'Dj sets',
                [{ text: '@laurabutallo', href: 'https://www.instagram.com/laurabutallo/?hl=es' }, { text: ' ' }, { text: '@ber.sektor', href: 'https://www.instagram.com/ber.sektor/?hl=es' }]
            ],
            [
                'Dibujo',
                [{ text: '@chamaland_', href: 'https://www.instagram.com/chamaland_/?hl=es' }, { text: ' ' }, { text: '@lapepitaritual', href: 'https://www.instagram.com/lapepitaritual/?hl=es' }, { text: ' ' }, { text: '@vinotintooo', href: 'https://www.instagram.com/vinotintooo/?hl=es' }, { text: ' ' }, { text: '@daqueenpi', href: 'https://www.instagram.com/daqueenpi/?hl=es' }, { text: ' ' }, { text: '@moranicol.exe', href: 'https://www.instagram.com/moranicol.exe/?hl=es' }, { text: ' ' }, { text: '@joe_carma', href: 'https://www.instagram.com/joe_carma/?hl=es' }, { text: ' ' }, { text: '@holajuanpez', href: 'https://www.instagram.com/holajuanpez/?hl=es' }]
            ],
            [
                'Flash tattoo',
                [{ text: '@dearcoco___', href: 'https://www.instagram.com/dearcoco___/?hl=es' }]
            ],
            [
                'Registro',
                [{ text: '@cosme_andaluz', href: 'https://www.instagram.com/cosme_andaluz/?hl=es' }]
            ],
            [
                'Video flyer',
                [{ text: '@____facundo', href: 'https://www.instagram.com/____facundo/?hl=es' }]
            ]
        ],
        media: [
            'https://youtube.com/shorts/ktVZdEyMs5Q?si=DiVrff9KgFB5zrEv'
        ]
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
        mediaLayout: 'vertical',
        mediaFullBleed: true,
        moreLink: 'https://youtu.be/MGwrDqIojQU',
        mediaMoreLinkCentered: true,
        projectInfo: [
            [
                'Composición, Animación y Render para las pantallas del programa televisivo Canta Conmigo Ahora transmitido por el canal El Trece, Estudios Baires, 2022.'
            ],
            [
                'Coordinación de pantallas: Pamela Resk'
            ],
            [
                'Jefe de PostProducción: Leonardo Buenaventura'
            ],
            [
                'Equipo de realizadores: José Luis Burrone, Cristian Bono, Nicolas Millano, Cristian Iturralde, Cristian Coca, Tomás Serio.'
            ]
        ],
        media: [
            './pantallas/img/showmatch%2001.webp',
            './pantallas/img/showmatch%2003.webp',
            './pantallas/img/showmatch%2002.webp'
        ]
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
        mediaLayout: 'featured-pairs',
        mediaFullBleed: true,
        mediaLimit: 6,
        projectInfo: [
            [
                'Composición, Animación y Render para las pantallas del programa televisivo Canta Conmigo Ahora transmitido por el canal El Trece, Estudios Baires, 2022.'
            ],
            [
                'Coordinación de pantallas: Pamela Resk',
                'Jefe de PostProducción: Nicolas Dawns',
                'Equipo de realizadores: José Luis Burrone, Cristian Bono, Nicolas Millano, Cristian Iturralde, Tomás Serio.'
            ]
        ],
        media: [
            './pantallas/img/canta%20conmigo%2001.webp',
            './pantallas/img/canta%20conmigo%2002.webp',
            './pantallas/img/canta%20conmigo%2003.webp',
            './pantallas/img/canta%20conmigo%2004.webp',
            'https://youtu.be/0regeFzFwrI?si=Iy26Qre1Ae-q8kD-',
            'https://youtu.be/1R98rlzwgX8?si=m7Op7JJF6W88xR_z'
        ]
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
        mediaLayout: 'interstellar-pairs',
        mediaLimit: 10,
        projectInfo: [
            [
                'Composición, Animación y Render para la campaña publicitaria de la cápsula Mich Kogan - 47 Street by Chita.'
            ],
            [
                '💥 Teamwork'
            ],
            [
                [
                    { text: '[@_poster]', href: 'https://www.instagram.com/_poster/?hl=es' },
                    { text: ' ' },
                    { text: '[@duoido]', href: 'https://www.instagram.com/duoido/?hl=es' },
                    { text: ' ' },
                    { text: '[@danacnello]', href: 'https://www.instagram.com/danacnello/?hl=es' },
                    { text: ' ' },
                    { text: '[@cesar.guardia]', href: 'https://www.instagram.com/cesar.guardia/?hl=es' },
                    { text: ' ' },
                    { text: '[@joacocastro_]', href: 'https://www.instagram.com/joacocastro_/?hl=es' },
                    { text: ' ' },
                    { text: '[@diego_lopeztullio]', href: 'https://www.instagram.com/diego_lopeztullio/?hl=es' },
                    { text: ' ' },
                    { text: '[@evyvinaccia]', href: 'https://www.instagram.com/evyvinaccia/?hl=es' },
                    { text: ' ' },
                    { text: '[@gabosemlich]', href: 'https://www.instagram.com/gabosemlich/?hl=es' },
                    { text: ' ' },
                    { text: '[@maiso.rokin]', href: 'https://www.instagram.com/maiso.rokin/?hl=es' },
                    { text: ' ' },
                    { text: '[@merisalinas]', href: 'https://www.instagram.com/merisalinas/?hl=es' },
                    { text: ' ' },
                    { text: '[@samolaser]', href: 'https://www.instagram.com/samolaser/?hl=es' },
                    { text: ' ' },
                    { text: '[@franciscotrrsmrvgg]', href: 'https://www.instagram.com/franciscotrrsmrvgg/?hl=es' },
                    { text: ' ' },
                    { text: '[@xrsnkx]', href: 'https://www.instagram.com/xrsnkx/?hl=es' },
                    { text: ' ' },
                    { text: '[@tatonax]', href: 'https://www.instagram.com/tatonax/?hl=es' },
                    { text: ' ' },
                    { text: '[@mariano_echarri]', href: 'https://www.instagram.com/mariano_echarri/?hl=es' }
                ]
            ]
        ],
        media: [
            './pantallas/img/interstellar%2005.webp',
            './pantallas/img/interstellar%2006.webp',
            './pantallas/img/interstellar%2007.webp',
            './pantallas/img/interstellar%2008.webp',
            './pantallas/img/interstellar%2009.webp',
            './pantallas/img/interstellar%2003.webp',
            './pantallas/img/interstellar%2004.webp',
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
        mediaLayout: 'pairs',
        mediaLimit: 19,
        projectInfo: [
            [
                'Composición, Animación y Render para las pantallas del programa televisivo Bailando 2023 transmitido por America tv.'
            ],
            [
                'Coordinación de pantallas: Pamela Resk',
                'Jefe de PostProducción: Nicolas Dawns',
                'Equipo de realizadores: José Luis Burrone, Cristian Bono, Nicolas Millano, Cristian Iturralde, Tomás Serio.'
            ]
        ],
        media: [
            './pantallas/img/bailando%2023_01.webp',
            './pantallas/img/bailando%2023_02.webp',
            './pantallas/img/bailando%2023_03.webp',
            './pantallas/img/bailando%2023_04.webp',
            './pantallas/img/bailando%2023_05.webp',
            './pantallas/img/bailando%2023_06.webp',
            './pantallas/img/bailando%2023_07.webp',
            './pantallas/img/bailando%2023_08.webp',
            './pantallas/img/bailando%2023_09.webp',
            './pantallas/img/bailando%2023_10.webp',
            './pantallas/img/bailando%2023_11.webp',
            './pantallas/img/bailando%2023_13.webp',
            'https://youtu.be/zMmWan-zKmQ?si=neM_LH1ha6rSI7dt',
            'https://youtu.be/uX7B64fZLws?si=Hai_doZceiM-IMQP',
            'https://youtu.be/rm-FYJmO4PY?si=osFB_C2W8LDkU7ly',
            'https://youtu.be/6lSYMcmTZk0?si=M7qiUl6ZiD7ypHju',
            'https://youtu.be/ElYmVCzYkxs?si=U2j3m5aJDJQoZIya',
            'https://youtu.be/yKAJBRgpd70?si=fPXMr3v-Id825Xoe',
            'https://youtu.be/hNlZ48D-fW8?si=-dN4ZNVrkYnzQ1ws'
        ]
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
        mediaLimit: 16,
        mediaFullBleed: true,
        moreLink: 'https://www.youtube.com/watch?v=nIAhXQ3qqUA',
        projectInfo: [
            [
                'Realización, composición, animación y render de pantallas para el concierto de Bizarrap Live at Coachella, Indio, California (abril de 2024).',
                [
                    { text: 'Trabajo realizado para el estudio del director de video escénico ' },
                    { text: 'Maxi Vecco', href: 'https://www.maxivecco.ar/' },
                    { text: ' y su equipo de trabajo: Nicolás Ortega (Composición & 3D), Eva Cordova (Coordinación), Gabriela Perel (Coordinación).' }
                ],
                'Pantallas realizadas: PTAZETA, Mamichula y Cuando te veo. Colaboración en Baby Hello.'
            ]
        ],
        mediaSections: [
            { before: 0, title: 'Mamichula' },
            { before: 5, title: 'Cuando te veo' }
        ],
        media: [
            './pantallas/img/mamichula%2001.webp',
            './pantallas/img/mamichula%2002.webp',
            './pantallas/img/mamichula%2003.webp',
            './pantallas/img/mamichula%2004.webp',
            './pantallas/img/mamichula%2005.webp',
            './pantallas/img/cuando%20te%20veo%2001.webp',
            './pantallas/img/cuando%20te%20veo%2002.webp',
            './pantallas/img/cuando%20te%20veo%2003.webp',
            './pantallas/img/cuando%20te%20veo%2004.webp',
            './pantallas/img/cuando%20te%20veo%2005.webp',
            './pantallas/img/cuando%20te%20veo%2006.webp',
            './pantallas/img/cuando%20te%20veo%2007.webp',
            './pantallas/img/cuando%20te%20veo%2008.webp',
            './pantallas/img/cuando%20te%20veo%2009.webp',
            './pantallas/img/cuando%20te%20veo%2010.webp',
            './pantallas/img/cuando%20te%20veo%2011.webp'
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
        mediaLayout: 'vertical-pairs',
        mediaPairStart: 5,
        mediaLimit: 9,
        mediaFullBleed: true,
        mediaSections: [
            { before: 0, title: 'Karol Sevilla - Otro Mood' },
            { before: 2, title: 'Hércules' },
            { before: 3, title: 'DJ Goofy' },
            { before: 4, title: 'Can You Feel the Love Tonight' }
        ],
        projectInfo: [
            [
                'Realización, composición, animación y render de pantallas para el evento Una Navidad Inolvidable de Disney, llevado a cabo en Ciudad Universitaria, Buenos Aires, diciembre de 2024.',
            ],
            [
                'Trabajo realizado para el estudio del director de video escénico Maxi Vecco y su equipo de trabajo: Nicolas Ortega (Compsición & 3D), Federico Nasso (Producción), Gabriela Perel (Coordinación), Camilo Freaknoiser (3D), Eva Cordova (Coordinación).'
            ],
            [
                'Pantallas realizadas: Hercules, Goofy DJ, Can you feel the love tonight, Karol Sevilla, Portales CCTV.',
                'Animatics: La Sirenita, Frozen.'
            ]
        ],
        media: [
            './pantallas/img/disney%2001.webp',
            './pantallas/img/disney%2002.webp',
            './pantallas/img/disney%2003.webp',
            './pantallas/img/disney%2004.webp',
            './pantallas/img/disney%2005.webp',
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
        projectInfo: [
            [
                'Realización de pantallas, composición, animación y render para la gira internacional del dúo Pimpinela durante el año 2025.'
            ],
            [
                'Coordinación: Marcos Antivero'
            ],
            [
                'Coreografía: Damasia Ochoa'
            ],
            [
                'Realizadores: Nicolas Millano, Cristian Iturralde, Tomás Serio'
            ]
        ],
        media: [
            'https://youtu.be/DobI2wv31JI',
            'https://youtu.be/1BLCQiRYwfw'
        ]
    },
    {
        id: 43,
        title: 'Xcel Music - Canddlelight',
        category: 'PANTALLAS / DISEÑO Y REALIZACIÓN',
        date: 'Noviembre 2025',
        studio: 'Bazzalo Studio',
        studioUrl: 'https://www.luciobazzalo.com/',
        role: '',
        canvasMode: 'grid',
        mediaLayout: 'featured-pairs',
        projectInfo: [
            [
                [
                    { text: 'Soft Light Sessions is a media architecture piece for The Bazaar, the new venue aboard the Celebrity Xcel: a double-height space featuring LED arches, immersive video walls, and ocean views, where people gather rather than just watch. The work treats the image as atmosphere: it neither narrates nor describes; it models the space. Digital light returns to its oldest function: marking a place, sustaining an emotional temperature, and accompanying a gathering. Soft Light Sessions, its nighttime acoustic set, lowers the visual intensity and turns the lighting architecture into a subtle backdrop for live music. Candlelight coexists in The Bazaar with Tunnel and Chamber—three pieces that share the same logic: imagery as silent companionship. Developed in collaboration with 5D Scenic.' }
                ],
                [
                    { text: 'Soft Light Sessions', href: 'https://www.luciobazzalo.com/visuals/soft-light-sessions' }
                ]
            ]
        ],
        media: [
            './pantallas/img/Xcel%20Music%20Canddlelight%2002.webp',
            './pantallas/img/Xcel%20Music%20Canddlelight%2003.webp',
            './pantallas/img/Xcel%20Music%20Canddlelight%2001.webp',
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
        mediaLayout: 'vertical-pairs',
        mediaPairStart: 5,
        mediaLimit: 9,
        projectInfo: [
            [
                [
                    { text: 'HIKO: Innovation Meets Wonder is a show presented aboard the Norwegian Luna, a new cruise ship from Norwegian Cruise Line that debuted in March 2026. The piece combines circus, mixed reality, 3D mapping, and acrobatics with a science fiction theme, where technology integrates with bodies as a single organism. The studio’s visual design encompasses the entire theater as an expanded space, with surfaces—stage, floor, wings, LED pixel walls, and reactive lighting—forming a real-time synchronized visual narrative. The imagery does not accompany the acrobats but breathes with them, reconfiguring the space according to their movements. The show was developed in collaboration with 5D Scenic, a regular partner of the studio for large-scale productions on international cruise ships.' }
                ],
                [
                    { text: 'HIKO: Innovation Meets Wonder', href: 'https://www.luciobazzalo.com/visuals/hiko' }
                ]
            ]
        ],
        media: [
            './pantallas/img/Hiko%2001.webp',
            './pantallas/img/Hiko%2002.webp',
            './pantallas/img/Hiko%2003.webp',
            './pantallas/img/Hiko%2004.webp',
            './pantallas/img/Hiko%2005.webp',
            './pantallas/img/Hiko%2006.webp',
            './pantallas/img/Hiko%2007.webp',
            './pantallas/img/Hiko%2008.webp',
            './pantallas/img/Hiko%2009.webp'
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
        mediaLayout: 'featured-gallery',
        mediaFeaturedCount: 3,
        mediaLimit: 11,
        mediaFullBleed: true,
        moreLink: 'https://www.youtube.com/live/C6JVALTg3ek?si=o7QEMxumvox9SCTJ',
        projectInfo: [
            [
                'Realización, composición, animación y render de patallas para el evento inaugural de los Juegos Olímpicos Suramericanos 2026 En el Monumento a la Bandera de Rosario.',
            ],
            [
                'Trabajo realizado para el estudio del director de video escénico Maxi Vecco y su equipo de trabajo: Nicolas Ortega (Compsición & 3D), Federico Nasso (Producción), Gabriela Perel (Coordinación), Camilo Freaknoiser (3D)',
            ],
            [
                'Pantallas realizadas: Piso delegaciones, Renders de banderas para Mapping, Cuenta regresiva preshow, logos institucionales, Depth Maps para 3d en Oración al Remanso.'
            ]
        ],
        media: [
            './pantallas/img/odesur%2001.webp',
            './pantallas/img/odesur%2002.png',
            './pantallas/img/odesur%2002b.webp',
            './pantallas/img/odesur%2007.webp',
            './pantallas/img/odesur%2005.webp',
            './pantallas/img/odesur%2006.webp',
            './pantallas/img/odesur%2004.webp',
            './pantallas/img/odesur%2011.webp',
            './pantallas/img/odesur%2008.webp',
            './pantallas/img/odesur%2009.webp',
            './pantallas/img/odesur%2010.webp'
        ]
    },
    {
        id: 46,
        title: 'Museo Malvinas',
        category: 'VIDEOINSTALACIÓN',
        date: 'Avellaneda, 2025',
        studio: '',
        role: '',
        canvasMode: 'grid',
        projectInfo: [
            [
                [{ text: 'Dirección ' }, { text: '@inaki.eche', href: 'https://www.instagram.com/inaki.eche/?hl=es' }],
                [{ text: 'Técnica ' }, { text: '@lucasoxx_', href: 'https://www.instagram.com/lucasoxx_/?hl=es' }, { text: ' ' }, { text: '@vj.t0n', href: 'https://www.instagram.com/vj.t0n/?hl=es' }],
                [{ text: 'Edición de contenidos ' }, { text: '@alester9000', href: 'https://www.instagram.com/alester9000/?hl=es' }],
                'Montaje Larry',
                [{ text: 'Registro ' }, { text: '@lucasoxx_', href: 'https://www.instagram.com/lucasoxx_/?hl=es' }]
            ]
        ],
        media: [
            './pantallas/img/museo%20malvinas.webp',
            'https://www.youtube.com/embed/K3yRnRwG1Fc?si=ydWiGLIEw2iCBSaP'
        ]
    },
    {
        id: 49,
        title: 'Art On Tezos - Exhibition',
        category: 'VIDEOINSTALACIÓN',
        categoryDetail: 'CRT Installation - Editing - Synchronization',
        date: '2025',
        studio: 'Newtro',
        studioUrl: 'https://newtro.xyz/',
        role: '',
        canvasMode: 'grid',
        mediaLayout: 'vertical',
        projectInfo: [
            [
                '🌐 General direction & Production > @lucasoxx_ @chamaland_ @bulls.w3b',
                '📺 CRT installation, Editing & Synchronization > cathodic squad @jotta.rs @zoen_calega @mdc1600_ @lucasoxx_ @vj.t0n asist @martinjomb'
            ],
            [
                '🪸 Material Setup > @ohde____ @laurabutallo @florprato @marriots_',
                '🌳 @bosquegracias Installation > Rocío Mio, Marian, @nikoalerce.art',
                '✨️ Lighting > @colorama.av asist @triniigodoy',
                '🎶 Musicalization > @fanfiordo'
            ]
        ],
        media: [
            './pantallas/img/Art%20on%20Tezos%2001.webp',
            './pantallas/img/Art%20on%20Tezos%2002.webp',
            './pantallas/img/Art%20on%20Tezos%2003.webp',
            './pantallas/img/Art%20on%20Tezos%2004.webp',
            './pantallas/img/Art%20on%20Tezos%2005.webp',
            'https://youtube.com/shorts/3Y9RhMvx1Rk?si=LbKduRcLZ4yOebeN'
        ]
    },
    {
        id: 50,
        title: 'Color del Sol - Sudan',
        category: 'VIDEOINSTALACIÓN',
        date: 'Niceto, 2019',
        studio: '',
        studioLabel: '',
        role: '',
        canvasMode: 'grid',
        mediaLayout: 'pairs',
        mediaFullBleed: true,
        mediaFill: true,
        projectInfo: [
            [
                'Instalación de CRT\'S y CCTV',
                'Colaboración de puesta en escena con ProyectoNueve Design > Violeta Alvarez y Jonathan Pozo.'
            ]
        ],
        media: [
            './pantallas/img/color%20de%20sol%2001.webp',
            './pantallas/img/color%20de%20sol%2002.webp'
        ]
    },
    {
        id: 48,
        title: 'AZAR',
        category: 'LIVE SETS AV',
        date: 'Espacio Korova, 2023',
        studio: '',
        studioLabel: '',
        role: '',
        canvasMode: 'spectrum',
        mediaLayout: 'vertical',
        mediaFullBleed: true,
        projectInfo: [
            [
                [{ text: 'AZAR', href: 'https://www.youtube.com/@azar.musica/videos' }],
                [{ text: '<ge0facets>', href: 'https://www.youtube.com/watch?v=HrvJAA8wnUQ' }]
            ]
        ],
        media: [
            './pantallas/img/AZAR%20Korova%2001.webp',
            './pantallas/img/AZAR%20Korova%2002.webp',
            './pantallas/img/AZAR%20Korova%2003.webp',
            './pantallas/img/AZAR%20Korova%2004.webp',
            './pantallas/img/AZAR%20Korova%2005.webp',
            './pantallas/img/AZAR%20Korova%2006.webp'
        ]
    }
];

function clearStoredProjects() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        // No-op: no se puede persistir en este entorno.
    }
    return [];
}
