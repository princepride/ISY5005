import styled from "@emotion/styled";
import { Typography } from '@mui/material';
import { img1, img2, img3, img4, img5, img6, night_club, massage, ktv, restaurant, bar, haircut, form } from "../assets";
import BusinessCard from '../components/BusinessCard';
import ImageButton from '../components/ImageButton';
import {ico} from '../assets';
import dummy from "../assets/data/dummy";

const HomePageContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

const Container = styled.div`
  border-radius: 8px;
  border: 1px solid #888;
  background-color: #ddd;
  overflow: hidden;
  margin: 20px;
  transition: border-color 0.3s ease-in-out;
`;

const YourFavourite = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const CategoryContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  flex-wrap: wrap;
`;

function CusHomePage() {
  const imageMap = {};
  imageMap.img1 = img1;
  imageMap.img2 = img2;
  imageMap.img3 = img3;
  imageMap.img4 = img4;
  imageMap.img5 = img5;
  imageMap.img6 = img6;
  imageMap.night_club = night_club;
  imageMap.massage = massage;
  imageMap.ktv = ktv;
  imageMap.restaurant = restaurant;
  imageMap.bar = bar;
  imageMap.haircut = haircut;

  return (
    <HomePageContainer>
        <Header>
          <Logo src={ico} alt="Logo" />
          <Typography variant="h6" color="text.secondary">
            Company Name
          </Typography>
        </Header>
        <Container>
        <Typography variant="h4" color="text.secondary" className="text-left" style={{ marginLeft: '10px', marginTop: '20px' }}>
          Your favourite
        </Typography>
      <YourFavourite>
        {dummy.businessCardData.map((item) => (
          <BusinessCard 
              label={item.label} 
              companyName={item.companyName} 
              address={item.address} 
              image={imageMap[item.image]} 
              information={item.information}
              formJson = {form}
            />
        ))}
      </YourFavourite>
      </Container>
      <Container>
      <Typography variant="h4" color="text.secondary" className="text-left" style={{ marginLeft: '10px', marginTop: '20px' }}>
          Category
        </Typography>
      <CategoryContainer>
      {dummy.imageButtonData.map((item) => (<ImageButton image={imageMap[item.image]} title={item.title} />))}
      {/* <ImageButton image="night_bar.jpg" title="night bar" />
      <ImageButton image="massage.jpg" title="massage" />
      <ImageButton image="ktv.jpg" title="ktv" />
      <ImageButton image="restaurant.jpg" title="restaurant" />
      <ImageButton image="bar.jpg" title="bar" />
      <ImageButton image="haircut.jpg" title="haircut" /> */}
    </CategoryContainer>
    </Container>
    </HomePageContainer>
  );
}

export default CusHomePage;