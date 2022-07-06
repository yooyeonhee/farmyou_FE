import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media (max-width: 575px) {
    width: 100vw;
  }
`;

export const LoginWrapper = styled.div`
  width: 56%;
  height: 550px;
  border: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 575px) {
    width: 60vw;
  }
`;

export const Text = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 78%;
  height: 220px;
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin-top: 25px;
`;

export const BtnWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const SocialLogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;