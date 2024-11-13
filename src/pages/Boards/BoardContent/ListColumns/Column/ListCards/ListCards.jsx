import Box from "@mui/material/Box";
import Card from "./Card/Card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const ListCards = ({ cards }) => {
  const result = cards.map((item) => item._id);
  return (
    <SortableContext items={result} strategy={verticalListSortingStrategy}>
      <Box
        sx={{
          p: "0 5px",
          m: "0 5px",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          overflowX: "hidden",
          overflowY: "auto",
          maxHeight: (theme) =>
            `calc(${theme.trelloCustome.boardContentHeight} - ${theme.spacing(
              5
            )} - ${theme.trelloCustome.columnHeaderHeight} - ${
              theme.trelloCustome.columnFooterHeight
            })`,
          "&::-webkit-scrollbar-thumb": {
            background: "#ced0da",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#bfc2cf",
          },
        }}
      >
        {cards?.map((card) => {
          return <Card key={card._id} card={card} />;
        })}
      </Box>
    </SortableContext>
  );
};

export default ListCards;
