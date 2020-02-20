import React from 'react';
import styled from 'styled-components';

// Styled Components
const Card = styled.div `
  border: solid black 2px;
  margin: 50px 250px 50px 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

const Image = styled.img `
    width 15%;
`; 

const Name = styled.h2 `
  color: yellow;
  font-weight: bold;
`;

const ListHeader = styled.ul `
  list-style-type: none;
`;

const Link = styled.a `
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  :hover {
    color: red;
  }
`;
// End Styled Components

const FollowerCard = ({ item }) => {

    return (
        <Card>
            <Image src={item.avatar_url} alt='avatar' />
            <ListHeader>
                <Name>Username: {item.login}</Name>
                <Link href={`${item.followers_url}`}>Followers: {item.followers_url}</Link>
                <Link href={`${item.following_url}`}>Following: {item.following_url}</Link>
                <Link href={`${item.organizations_url}`}>Organizations: {item.organizations_url}</Link>
                <Link href={`${item.subscriptions_url}`}>Subscriptions: {item.subscriptions_url}</Link>
                <Link href={`${item.repos_url}`}>Repos: {item.repos_url}</Link>
                <Link href={`${item.html_url}`}>GitHub: {item.html_url}</Link>
            </ListHeader>
        </Card>
    )
}

export default FollowerCard;
