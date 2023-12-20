import styled from 'styled-components';

const Card = styled.div`
    margin-left: 8px;
    margin-bottom: 8px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 300px;
    padding: 8px;
    cursor: pointer;
`;

const Img = styled.img`
    width: 100%;
    border-radius: 4px;
`;

// webformatURL을 previewURL로 저해상도로 바꾸어 LCP 개선 가능
const ImageCard = ({ imgData, onClick }) => {
    const { webformatURL, id } = imgData;
    return (
        <Card onClick={onClick}>
            <Img key={id} src={webformatURL}></Img>
        </Card>
    );
};

export default ImageCard;
