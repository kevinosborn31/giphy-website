import { render } from "@testing-library/react";
import GifGallery from "./GifGallery";

test("renders loading state", () => {
  const { getByTestId } = render(
    <GifGallery isLoading={true} isError={false} gifs={[]} />
  );
  const loadingElement = getByTestId("loading-state");
  expect(loadingElement).toBeInTheDocument();
});

test("renders error state", () => {
  const { getByText } = render(
    <GifGallery isLoading={false} isError={true} gifs={[]} />
  );
  const errorElement = getByText("Error fetching data"); 
  expect(errorElement).toBeInTheDocument();
});

test("renders no data state", () => {
  const { getByText } = render(
    <GifGallery isLoading={false} isError={false} gifs={[]} />
  );
  const noDataElement = getByText("No GIFs found");
  expect(noDataElement).toBeInTheDocument();
});

test("renders GIF items", () => {
  const gifs = [
    { id: "1", title: "GIF 1", url: "url1", embed_url: "embedUrl1" },
    { id: "2", title: "GIF 2", url: "url2", embed_url: "embedUrl2" },
  ];

  const { getByText } = render(
    <GifGallery isLoading={false} isError={false} gifs={gifs} />
  );

  gifs.forEach((gif) => {
    const gifTitleElement = getByText(gif.title);
    expect(gifTitleElement).toBeInTheDocument();
  });
});
