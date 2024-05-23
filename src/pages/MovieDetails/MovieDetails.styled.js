import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`

  border-bottom: 2mm ridge rgba(211, 220, 50, 0.6);

margin-right: 20px;
margin-left: 20px;
padding-left: 40px;
padding-right: 40px;
margin-bottom: 20px;
  }
`;
export const Title = styled.h2`


  }
`;

export const Image = styled.img`

max-height: 350px;

  }
`;
export const Infos = styled.div`


display: flex;

}
`;

export const Description = styled.div`

margin-left: 20px;

}
`;
export const DescriptionContainer = styled.div`

margin-top: 20px;

}
`;
export const Link = styled(NavLink)`
  padding: 4px 8px;
  border-radius: 4px;
  box-shadow: 0px 0px 13px 1px rgba(225, 225, 225, 1);
  text-decoration: none;
  color: black;
  font-weight: 600;

  &.active {
    text-decoration: 3px underline darkviolet;
  }
  &:hover {
    box-shadow: inset 0px 0px 13px 1px rgba(225, 225, 225, 1);
`;

export const ListItem = styled.li`
  margin-bottom: 10px;

  }
`;
