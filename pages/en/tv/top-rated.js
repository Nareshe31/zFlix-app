import axios from "axios";
import PopularMovie from "../../../components/Movie/PopularMovie";

function RecentTvPage({ data, base_url }) {
    return (
        <PopularMovie
            data={data}
            base_url={base_url}
            media_type="tv"
            filter_type="top_rated"
            title="Top Rated"
            api_url={"/tv/top_rated"}
        />
    );
}

export async function getServerSideProps(context) {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&page=1`
        );
        const data = await res.json();
        if (!data.hasOwnProperty("success")) {
            return {
                props: {
                    data,
                    base_url: process.env.BASE_URL,
                },
            };
        }
        return {
            notFound: true,
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}

export default RecentTvPage;
