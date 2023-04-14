import styled from "@emotion/styled";
import { Typography } from '@mui/material';
import { img1, img2, img3, img4, img5, img6, form } from "../assets";
import BusinessCard from '../components/BusinessCard';
import ImageButton from '../components/ImageButton';
import {ico} from '../assets';

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

const CardContainer = styled.div`
  border-radius: 8px;
  border: 1px solid #888;
  background-color: #ddd;
  overflow: hidden;
  margin: 20px;
  transition: border-color 0.3s ease-in-out;

`;

const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  overflow-y: scroll;
  padding: 16px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
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
  return (
    <HomePageContainer>
        <Header>
          <Logo src={ico} alt="Logo" />
          <Typography variant="h6" color="text.secondary">
            Company Name
          </Typography>
        </Header>
        <CardContainer>
        <Typography variant="h4" color="text.secondary" className="text-left" style={{ marginLeft: '10px', marginTop: '20px' }}>
          Your favourite
        </Typography>
      <YourFavourite>
        <BusinessCard 
          label={"sex"} 
          companyName={"哥哥快操我"} 
          address={"190 Changi Rd, #01-01A"} 
          image={img1} 
          information={"新加坡最棒的妓院"}
          formJson = {form}
        />
        <BusinessCard 
          label={"sex"} 
          companyName={"哥哥快操我"} 
          address={"190 Changi Rd, #01-01A"} 
          image={img2} 
          information={"新加坡最棒的妓院"}
          formJson = {form}
        />
        <BusinessCard 
          label={"sex"} 
          companyName={"哥哥快操我"} 
          address={"190 Changi Rd, #01-01A"} 
          image={img3} 
          information={"新加坡最棒的妓院"}
          formJson = {form}
        />
        <BusinessCard 
          label={"sex"} 
          companyName={"哥哥快操我"} 
          address={"190 Changi Rd, #01-01A"} 
          image={img4} 
          information={"新加坡最棒的妓院"}
          formJson = {form}
        />
        <BusinessCard 
          label={"sex"} 
          companyName={"哥哥快操我"} 
          address={"190 Changi Rd, #01-01A"} 
          image={img5} 
          information={"新加坡最棒的妓院"}
          formJson = {form}
        />
        <BusinessCard 
          label={"sex"} 
          companyName={"哥哥快操我"} 
          address={"190 Changi Rd, #01-01A"} 
          image={img6} 
          information={"新加坡最棒的妓院"}
          formJson = {form}
        />
        <BusinessCard 
          label={"sex"} 
          companyName={"哥哥快操我"} 
          address={"190 Changi Rd, #01-01A"} 
          image={img5} 
          information={"新加坡最棒的妓院"}
          formJson = {form}
        />
        <BusinessCard 
          label={"sex"} 
          companyName={"哥哥快操我"} 
          address={"190 Changi Rd, #01-01A"} 
          image={img2} 
          information={"新加坡最棒的妓院"}
          formJson = {form}
        />
      </YourFavourite>
      </CardContainer>
      <CardContainer>
      <Typography variant="h4" color="text.secondary" className="text-left" style={{ marginLeft: '10px', marginTop: '20px' }}>
          Category
        </Typography>
      <CategoryContainer>
      <ImageButton image={img1} title="hello" />
      <ImageButton image={img1} title="hello" />
      <ImageButton image={img1} title="hello" />
      <ImageButton image={img1} title="hello" />
      <ImageButton image={img1} title="hello" />
      <ImageButton image={img1} title="hello" />
    </CategoryContainer>
    </CardContainer>
    </HomePageContainer>
  );
}

export default CusHomePage;