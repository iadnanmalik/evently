import styled from "styled-components";

export const HomeParent = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 170px;
`;
export const HomeSection = styled.div`
  display: flex;
  align-items: center;
  gap: 220px;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 55px;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 52px;
`;

export const TextParent = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 52px;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;
export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 521px;
`;
export const TextHeading = styled.div`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  /* or 100% */

  color: #240d57;
  @media (max-width: 425px) {
    font-size: 36px;
    line-height: 36px;
  }
`;
export const TextHeadinggGradient = styled.div`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 74px;
  /* identical to box height */

  background: linear-gradient(90deg, #8456ec 24.2%, #e87bf8 120.46%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media (max-width: 425px) {
    font-size: 36px;
    line-height: 36px;
  }
`;

export const TextCaption = styled.div`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;

  color: #4f4f4f;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  @media (max-width: 425px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const CustomImage = styled.img`
  width: 311px;
  @media (max-width: 425px) {
    width: 165px;
  }
`;

export const CreateEventButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;
  margin-left: auto;
  margin-right: 0px;
  width: 320px;

  background: linear-gradient(90deg, #8456ec 3.25%, #e87bf8 100%);
  border-radius: 10px;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  /* identical to box height */

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 425px) {
    padding: 16px;
    gap: 10px;
    font-size: 16px;
    line-height: 18px;
    width: 187px;
  }
`;
export const CreateEventButtonBig = styled(CreateEventButton)`
  @media (max-width: 1024px) {
    display: none;
  }
  &.form {
    margin-left: 0;
    margin-right: auto;
    margin-top: 20px;
  }
`;
export const CreateEventButtonSmall = styled(CreateEventButton)`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
`;
