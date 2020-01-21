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
    width 30%;
`; 

const Name = styled.h2 `
  color: yellow;
  font-weight: bold;
`;

const ListHeader = styled.ul `
  list-style-type: none;
`;

const ListItems = styled.li `
  color: white;
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

const UserCard = ({ item }) => {

    return (
        <Card>
            <Image src={item.avatar_url} alt='avatar' />
            <ListHeader>
                <Name>Name: {item.name}</Name>
                <ListItems>Location: {item.location}</ListItems>
                <ListItems>Bio: {item.bio}</ListItems>
                <ListItems>Followers: {item.followers}</ListItems>
                <ListItems>Following: {item.following}</ListItems>
                <ListItems>Public Repos: {item.public_repos}</ListItems>
                <Link href={`${item.blog}`}>Blog: {item.blog}</Link>
                <Link href={`${item.html_url}`}>GitHub: {item.html_url}</Link>
            </ListHeader>
        </Card>
    )
}

export default UserCard;