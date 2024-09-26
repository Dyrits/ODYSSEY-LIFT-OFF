import { RESTDataSource } from "@apollo/datasource-rest";
import { AuthorModel, TrackModel } from "./models";

class TrackAPI extends RESTDataSource {
  override baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracks(): Promise<TrackModel[]> {
    return this.get("/tracks");
  }

  getAuthor(authorId: string): Promise<AuthorModel> {
    return this.get(`/author/${authorId}`);
  }
}

export default TrackAPI;
