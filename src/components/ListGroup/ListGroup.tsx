import { useState } from "react"
import "./ListGroup.css"
import styled from "styled-components"

interface ListItemProps {
  active: boolean
}

interface Props {
  items: string[]
  heading: string
  onSelectItem: (item: string) => void
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`

function ListGroup({ items, heading, onSelectItem }: Props) {
  const listItemClass = "list-group-item"
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p> No item Found </p>}
      <List className="list-group">
        {items.map((item, index) => (
          <ListItem
            active={selectedIndex === index}
            key={index}
            // className={
            //   selectedIndex === index
            //     ? `${listItemClass} active`
            //     : listItemClass
            // }
            onClick={() => {
              setSelectedIndex(index)
              onSelectItem(item)
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ListGroup
