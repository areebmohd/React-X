import './rightbar.css'

function Rightbar() {
    return (
        <div className="rightbar">
            <span className='searchBox'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='13px'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                <input type="text" placeholder="Search" />
            </span>
            <div class="ad">
                <h2>Subscribe to Premium</h2>
                <p>Subscribe to unlock new features and if <br />eligible, recieve a share of ad revenue.</p>
                <button>Subscribe</button>
            </div>
            <div class="whoToFollow">
                <h2>Who to follow</h2>
                <div class="accountToFollow">
                    <div class="account">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='30px'><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>
                        <div>
                            <h4>Name</h4>
                            <p>@username</p>
                        </div>
                    </div>
                    <button>Follow</button>
                </div>
                <div class="accountToFollow">
                    <div class="account">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='30px'><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>
                        <div>
                            <h4>Name</h4>
                            <p>@username</p>
                        </div>
                    </div>
                    <button>Follow</button>
                </div>
                <div class="accountToFollow">
                    <div class="account">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='30px'><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>
                        <div>
                            <h4>Name</h4>
                            <p>@username</p>
                        </div>
                    </div>
                    <button>Follow</button>
                </div>
                <p className='showMore'>Show more</p>
            </div>
            <div className="footer">
                <span><p>Terms of service</p><p>Privacy Policy</p><p>Cookie Policy</p></span>
                <span><p>Ads info</p><p>About</p><p>© 2024 X Corp.</p></span>
            </div>
        </div>
    )
}
export default Rightbar;