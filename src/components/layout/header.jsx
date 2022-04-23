import styled from "styled-components";
import { Media } from "../../utils/io";
import { MediumText, TextSmall } from "../styles/TextStyles";
import { Container } from "../styles/WrapStyles";

export const Header = () => {
  return (
    <HeaderContainer>
      <CustomContainer align="center">
        <Logo />
        <Contact />
      </CustomContainer>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
  height: 64px;
  width: 100%;
  background: white;
  border-bottom: 1px solid #d7dbf5;
`;

const CustomContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  @media ${Media.mobile} {
    padding: 0 16px;
  }
`;

const Contact = () => (
  <WrappedContact>
    <Text>¿Tienes alguna duda?</Text>
    <Link href="tel:014116001">
      <TextPhone>(01) 411 6001</TextPhone>
    </Link>
  </WrappedContact>
);

const WrappedContact = styled.div`
  display: flex;
  align-items: center;
`;
const Text = styled(TextSmall)`
  margin: 0;
  font-size: 12px;
  color: var(--Text2);
`;
const TextPhone = styled(MediumText)`
  margin: 0;
`;
const Link = styled.a`
  color: var(--Secondary);
  display: grid;
  text-decoration: none;
`;
const Logo = () => (
  <svg width="99" height="16" viewBox="0 0 99 16" fill="#EF3340">
    <path d="M56.2886 0C55.3834 0 54.7046 0.252366 53.9692 1.21136L44.8046 12.3155L41.2971 1.46372C40.9011 0.353312 40.1091 0 39.3737 0C38.2423 0 37.6766 0.403785 37.1109 1.36278L29.0211 15.7981H33.5469L39.0343 5.85489L42.4286 15.7981H46.2189L54.4783 5.90536L54.4217 15.7981H58.2686L58.212 1.91798C58.212 0.555205 57.2503 0.0504732 56.2886 0Z" />
    <path d="M23.5903 2.57413L19.9697 15.7981H24.0994L27.6634 2.57413H23.5903Z" />
    <path d="M8.93829 8.58044H6.05314L7.128 4.59306H10.1829C11.8234 4.59306 12.672 5.24921 12.5023 6.51104C12.3326 7.82334 10.9183 8.58044 8.93829 8.58044ZM16.5754 6.35962C16.8017 4.59306 15.6703 2.57413 11.5406 2.57413H3.564L0 15.7981H4.07314L5.43086 10.8517H7.524L11.1446 15.7981H15.6137L11.5406 10.5489C15.1611 9.74132 16.3491 8.07571 16.5754 6.35962Z" />
    <path d="M68.904 10.9022L72.5246 6.05678L73.8823 10.9022H68.904ZM75.24 15.7981H79.1434L75.4097 3.63407C74.9006 2.22082 73.9389 1.86751 72.9206 1.96845C72.2983 2.01893 71.6194 2.27129 70.9406 3.07886L61.1537 15.8486H65.1703L67.1503 13.1735H74.448L75.24 15.7981Z" />
    <path d="M91.5891 13.3754C88.2514 13.3249 86.3846 11.6593 86.6674 9.53943C87.0069 6.66246 89.9486 4.94637 94.0783 4.94637C95.2663 4.94637 96.8503 5.04732 98.2646 5.35016L99 2.67508C97.8686 2.42271 95.8886 2.22082 94.5874 2.22082C87.5726 2.22082 83.1034 5.09779 82.5377 9.43849C82.0286 13.2744 85.0834 16 91.5891 16C92.8903 16 94.0217 15.8991 95.6623 15.6467L96.4543 12.7697C94.8137 13.1735 93.5691 13.3754 91.5891 13.3754Z" />
  </svg>
);
