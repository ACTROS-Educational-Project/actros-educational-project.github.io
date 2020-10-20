module.exports = {
  siteMetadata: {
    title: `ACTROS`,
    siteUrl: `https://actros-educational-project.github.io`,
    description: `Center for Advanced Training on Robotics and %TOPICS%`,
    topics: [
      'Open Source',
      'Navigation',
      'Deep Learning',
      'Perception',
    ],
    menu: [
      {
        name: 'Inicio',
        path: '/'
      },
      {
        name: 'Cursos',
        path: '/courses'
      }, //Poner la coma cuando se descomente!
      {
        name: 'Quiénes Somos',
        path: '/about'
      },
      {
        name: 'Contacto',
        path: '/contact'
      }
    ],
    footerMenu: [
      {
        name: 'Cursos',
        path: '/courses'
      },
    ],
    search: true,
    author: {
      name: `ACTROS`,
      description: `El proyecto <a href="https://www.rosin-project.eu/ftp/center-for-advanced-training-on-robotics-and-open-source-act-ros-education-project" target="_blank"><strong>“Center for Advanced Training on Robotics and Open Source (ACTROS)”</strong></a> tiene como objetivo crear un centro de referencia en la formación en robótica móvil utilizando Open Source, principalmente ROS y ROS2. Este centro se encuentra dentro de la <a href = "https: // www .urjc.es / "target =" _ blank "> <strong> Universidad Rey Juan Carlos </strong> </a>, que actualmente es un referente nacional en la formación ROS, tanto por cursos universitarios impartidos desde 2015 (Curso Universitario Avanzado en Programación de Robots con ROS) y por la creación de la Licenciatura en Robótica de Software, la cual es pionera en nuestro país por su enfoque en el desarrollo de software para robots.
      Este proyecto tiene como objetivo dotar a los robots existentes en el laboratorio de robótica de referencia en la materia (Pepper, Tiago, Kobuki, etc.) para que realicen cursos de ejecución regular tanto para estudiantes avanzados, como para profesionales que quieran formarse en desarrollo de software para robots. Este proyecto ha recibido financiación del programa de investigación e innovación Horizonte 2020 de la Unión Europea en virtud del acuerdo de subvención nº 732287.`,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/IntellRobotLabs`,
        linkedin: ``,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/ACTROS-Educational-Project`,
        twitch: ``
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/intellrobotslab_icon.png`
        }
      }
    }
  ]
};
