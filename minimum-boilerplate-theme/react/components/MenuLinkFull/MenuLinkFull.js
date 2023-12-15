import React from 'react';
//import { useDevice } from 'vtex.device-detector'; 

const MenuLinkFull = ({ links }) => {
//  const { isMobile } = useDevice();
//console.log(links)
  return (
    <nav>
      <ul className="menu-nav">
        {links.map((link, index) => (
          <li className="menu-li" key={index}>
            <a className="menu-url" href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const defaultProps = {
  links:[
    {
      __editorItemTitle: '',
      label: 'Menú 1',
      url: '',
    },
    {
      __editorItemTitle: '',
      label: 'Menú 2',
      url: '',
    },
    {
      __editorItemTitle: '',
      label: 'Menú 3',
      url: '',
    },
    {
      __editorItemTitle: '',
      label:'Menú 4',
      url: '',
    }
  ]
}
MenuLinkFull.defaultProps = defaultProps;

MenuLinkFull.schema = {
  title: "Configurar menu",
  type: "object",
  properties: {
    links: {
      title: "Configuracion de link",
      type: "array",
      items: {
        title: "Link",
        type: "object",
        properties: {
          __editorItemTitle: {
            title: 'Identificación',
            type: 'string',
            description: 'texto de identificacíon dentro del site editor'
          },
          label: {
            title: 'Texto del menu',
            type: "string"
          },
          url: {
            title: 'url del menu',
            type: "string"
          }
        },
        required: ["label", "url"]
      }
    }
  }
};

export default MenuLinkFull;
