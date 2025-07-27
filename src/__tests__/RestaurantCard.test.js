import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  WithPromotedLabel,
} from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render restaurant card component with props Data", () => {
  // 1. render component
  render(<RestaurantCard resData={MOCK_DATA} />); // it takes props ie resData , jab call kiya hai function vo name  && (means resData ke andr kya pass kiya hai, ie restaurant.info , so jo bhi render ho raha hai uska mock data bna lenge ek , or console lga kr check krege ie resData). && Create a new folder ie mocks which contains mocks

  // 2. Check whether this card is load or not
  const name = screen.getByText("Nomad Pizza - Traveller Series");

  expect(name).toBeInTheDocument();
});

const PromotedRestaurantCard = WithPromotedLabel(RestaurantCard);

it("Should render restaurantCard with promoted label", () => {
  // 1. render component
  render(<PromotedRestaurantCard resData={MOCK_DATA} />);

  const promotedLabel = screen.getByText("Promoted");
  expect(promotedLabel).toBeInTheDocument();
});
