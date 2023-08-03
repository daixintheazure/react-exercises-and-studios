export default function HobbyLinks() {
    const hobbyLinks = ["pathofexile.com", "https://www.pathofexile.com/trade/search/Standard"];
    return(
        <div>
            <div>
                <a href = {hobbyLinks[0]}>path of exile</a>
            </div>
            <div>
                <a href = {hobbyLinks[1]}>Path of trading</a>
            </div>
        </div>
    );
}