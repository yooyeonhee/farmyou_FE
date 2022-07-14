import styled from "@emotion/styled";
import { IBodyProps, ICartProps } from "./LayoutHeader.types";

export const Body = styled.div`
  width: 100%;
  height: 100px;
  z-index: 100;
  background-color: ${(props: IBodyProps) =>
    props.isCheckList ? (props.scroll ? "white" : "none") : "white"};
  border-bottom: ${(props: IBodyProps) =>
    props.isCheck ? "1px solid white" : "none"};
  padding: 15px 10vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  color: ${(props: IBodyProps) =>
    props.isCheckList ? (props.scroll ? "#f6651e" : "white") : "#f6651e"};
`;

export const LogoImg = styled.img`
  width: 15vw;
  min-width: 200px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuFunction = styled.div`
  font-size: 20px;
  margin-right: 40px;
  @media (max-width: 637px) {
    display: none;
  }
`;
export const Cart = styled.div`
  font-size: 20px;
  margin-right: 40px;
  transform: scale(${(props: ICartProps) => (props.isIn ? "1.2" : "1")});
  transition: 0.3s;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 637px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  font-size: 20px;
  margin-right: 40px;
  display: none;
  @media (max-width: 637px) {
    display: inline;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  font-size: 2rem;
  padding: 10px 20px;
  width: 100%;
  color: #b8b7ad;
  :hover {
    color: #c84e50;
  }
`;
