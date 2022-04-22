import { Container, Title, List, Item } from "./styles"

const DataBox = ({title, items}) => {
    return (
    <Container>
        <Title>{title}</Title>
        <List>
            {items}
        </List>
    </Container>
    )
}

export { DataBox }