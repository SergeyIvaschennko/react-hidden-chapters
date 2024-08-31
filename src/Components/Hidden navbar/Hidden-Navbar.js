import React from 'react';
import "../Navbar/Navbar.css"
import heart from "../../Pics/heart_black.png"
import shoppingCart from "../../Pics/shopping-bag_black.png"
import {Link} from "react-router-dom";

const HiddenNavbar = () => {
    return (
        <div className="hidden-navbar">
            <nav className="navbar" style={{
                backgroundColor: 'white'
            }}>
                <Link to="/literature/Fiction" className="navbar-item left">
                    <span className="navbar-text" style={{ color: 'black' }}>Literature</span>
                </Link>
                <Link to="/" className="navbar-item center">
                    <svg width="277" height="50" viewBox="0 0 277 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="7" width="270" height="43" rx="5" fill="#105741"/>
                        <rect x="8" y="1" width="268" height="41" rx="4" fill="white" stroke="#333333" stroke-width="2"/>
                        <path d="M24.97 15.62C26.25 15.62 27.39 15.88 28.39 16.4C29.41 16.9 30.21 17.68 30.79 18.74C31.37 19.78 31.66 21.12 31.66 22.76V32H26.98V23.48C26.98 22.18 26.69 21.22 26.11 20.6C25.55 19.98 24.75 19.67 23.71 19.67C22.97 19.67 22.3 19.83 21.7 20.15C21.12 20.45 20.66 20.92 20.32 21.56C20 22.2 19.84 23.02 19.84 24.02V32H15.16V9.74H19.84V20.33L18.79 18.98C19.37 17.9 20.2 17.07 21.28 16.49C22.36 15.91 23.59 15.62 24.97 15.62ZM35.9022 32V15.86H40.5822V32H35.9022ZM38.2422 13.61C37.3822 13.61 36.6822 13.36 36.1422 12.86C35.6022 12.36 35.3322 11.74 35.3322 11C35.3322 10.26 35.6022 9.64 36.1422 9.14C36.6822 8.64 37.3822 8.39 38.2422 8.39C39.1022 8.39 39.8022 8.63 40.3422 9.11C40.8822 9.57 41.1522 10.17 41.1522 10.91C41.1522 11.69 40.8822 12.34 40.3422 12.86C39.8222 13.36 39.1222 13.61 38.2422 13.61ZM51.8556 32.24C50.3356 32.24 48.9656 31.9 47.7456 31.22C46.5256 30.52 45.5556 29.55 44.8356 28.31C44.1356 27.07 43.7856 25.61 43.7856 23.93C43.7856 22.23 44.1356 20.76 44.8356 19.52C45.5556 18.28 46.5256 17.32 47.7456 16.64C48.9656 15.96 50.3356 15.62 51.8556 15.62C53.2156 15.62 54.4056 15.92 55.4256 16.52C56.4456 17.12 57.2356 18.03 57.7956 19.25C58.3556 20.47 58.6356 22.03 58.6356 23.93C58.6356 25.81 58.3656 27.37 57.8256 28.61C57.2856 29.83 56.5056 30.74 55.4856 31.34C54.4856 31.94 53.2756 32.24 51.8556 32.24ZM52.6656 28.4C53.4256 28.4 54.1156 28.22 54.7356 27.86C55.3556 27.5 55.8456 26.99 56.2056 26.33C56.5856 25.65 56.7756 24.85 56.7756 23.93C56.7756 22.99 56.5856 22.19 56.2056 21.53C55.8456 20.87 55.3556 20.36 54.7356 20C54.1156 19.64 53.4256 19.46 52.6656 19.46C51.8856 19.46 51.1856 19.64 50.5656 20C49.9456 20.36 49.4456 20.87 49.0656 21.53C48.7056 22.19 48.5256 22.99 48.5256 23.93C48.5256 24.85 48.7056 25.65 49.0656 26.33C49.4456 26.99 49.9456 27.5 50.5656 27.86C51.1856 28.22 51.8856 28.4 52.6656 28.4ZM56.8956 32V28.7L56.9856 23.9L56.6856 19.13V9.74H61.3656V32H56.8956ZM72.6271 32.24C71.1071 32.24 69.7371 31.9 68.5171 31.22C67.2971 30.52 66.3271 29.55 65.6071 28.31C64.9071 27.07 64.5571 25.61 64.5571 23.93C64.5571 22.23 64.9071 20.76 65.6071 19.52C66.3271 18.28 67.2971 17.32 68.5171 16.64C69.7371 15.96 71.1071 15.62 72.6271 15.62C73.9871 15.62 75.1771 15.92 76.1971 16.52C77.2171 17.12 78.0071 18.03 78.5671 19.25C79.1271 20.47 79.4071 22.03 79.4071 23.93C79.4071 25.81 79.1371 27.37 78.5971 28.61C78.0571 29.83 77.2771 30.74 76.2571 31.34C75.2571 31.94 74.0471 32.24 72.6271 32.24ZM73.4371 28.4C74.1971 28.4 74.8871 28.22 75.5071 27.86C76.1271 27.5 76.6171 26.99 76.9771 26.33C77.3571 25.65 77.5471 24.85 77.5471 23.93C77.5471 22.99 77.3571 22.19 76.9771 21.53C76.6171 20.87 76.1271 20.36 75.5071 20C74.8871 19.64 74.1971 19.46 73.4371 19.46C72.6571 19.46 71.9571 19.64 71.3371 20C70.7171 20.36 70.2171 20.87 69.8371 21.53C69.4771 22.19 69.2971 22.99 69.2971 23.93C69.2971 24.85 69.4771 25.65 69.8371 26.33C70.2171 26.99 70.7171 27.5 71.3371 27.86C71.9571 28.22 72.6571 28.4 73.4371 28.4ZM77.6671 32V28.7L77.7571 23.9L77.4571 19.13V9.74H82.1371V32H77.6671ZM94.4786 32.24C92.6386 32.24 91.0186 31.88 89.6186 31.16C88.2386 30.44 87.1686 29.46 86.4086 28.22C85.6486 26.96 85.2686 25.53 85.2686 23.93C85.2686 22.31 85.6386 20.88 86.3786 19.64C87.1386 18.38 88.1686 17.4 89.4686 16.7C90.7686 15.98 92.2386 15.62 93.8786 15.62C95.4586 15.62 96.8786 15.96 98.1386 16.64C99.4186 17.3 100.429 18.26 101.169 19.52C101.909 20.76 102.279 22.25 102.279 23.99C102.279 24.17 102.269 24.38 102.249 24.62C102.229 24.84 102.209 25.05 102.189 25.25H89.0786V22.52H99.7286L97.9286 23.33C97.9286 22.49 97.7586 21.76 97.4186 21.14C97.0786 20.52 96.6086 20.04 96.0086 19.7C95.4086 19.34 94.7086 19.16 93.9086 19.16C93.1086 19.16 92.3986 19.34 91.7786 19.7C91.1786 20.04 90.7086 20.53 90.3686 21.17C90.0286 21.79 89.8586 22.53 89.8586 23.39V24.11C89.8586 24.99 90.0486 25.77 90.4286 26.45C90.8286 27.11 91.3786 27.62 92.0786 27.98C92.7986 28.32 93.6386 28.49 94.5986 28.49C95.4586 28.49 96.2086 28.36 96.8486 28.1C97.5086 27.84 98.1086 27.45 98.6486 26.93L101.139 29.63C100.399 30.47 99.4686 31.12 98.3486 31.58C97.2286 32.02 95.9386 32.24 94.4786 32.24ZM115.204 15.62C116.484 15.62 117.624 15.88 118.624 16.4C119.644 16.9 120.444 17.68 121.024 18.74C121.604 19.78 121.894 21.12 121.894 22.76V32H117.214V23.48C117.214 22.18 116.924 21.22 116.344 20.6C115.784 19.98 114.984 19.67 113.944 19.67C113.204 19.67 112.534 19.83 111.934 20.15C111.354 20.45 110.894 20.92 110.554 21.56C110.234 22.2 110.074 23.02 110.074 24.02V32H105.394V15.86H109.864V20.33L109.024 18.98C109.604 17.9 110.434 17.07 111.514 16.49C112.594 15.91 113.824 15.62 115.204 15.62ZM142.433 32.24C140.693 32.24 139.143 31.89 137.783 31.19C136.423 30.47 135.353 29.48 134.573 28.22C133.813 26.96 133.433 25.53 133.433 23.93C133.433 22.31 133.813 20.88 134.573 19.64C135.353 18.38 136.423 17.4 137.783 16.7C139.143 15.98 140.693 15.62 142.433 15.62C144.133 15.62 145.613 15.98 146.873 16.7C148.133 17.4 149.063 18.41 149.663 19.73L146.033 21.68C145.613 20.92 145.083 20.36 144.443 20C143.823 19.64 143.143 19.46 142.403 19.46C141.603 19.46 140.883 19.64 140.243 20C139.603 20.36 139.093 20.87 138.713 21.53C138.353 22.19 138.173 22.99 138.173 23.93C138.173 24.87 138.353 25.67 138.713 26.33C139.093 26.99 139.603 27.5 140.243 27.86C140.883 28.22 141.603 28.4 142.403 28.4C143.143 28.4 143.823 28.23 144.443 27.89C145.083 27.53 145.613 26.96 146.033 26.18L149.663 28.16C149.063 29.46 148.133 30.47 146.873 31.19C145.613 31.89 144.133 32.24 142.433 32.24ZM162.079 15.62C163.359 15.62 164.499 15.88 165.499 16.4C166.519 16.9 167.319 17.68 167.899 18.74C168.479 19.78 168.769 21.12 168.769 22.76V32H164.089V23.48C164.089 22.18 163.799 21.22 163.219 20.6C162.659 19.98 161.859 19.67 160.819 19.67C160.079 19.67 159.409 19.83 158.809 20.15C158.229 20.45 157.769 20.92 157.429 21.56C157.109 22.2 156.949 23.02 156.949 24.02V32H152.269V9.74H156.949V20.33L155.899 18.98C156.479 17.9 157.309 17.07 158.389 16.49C159.469 15.91 160.699 15.62 162.079 15.62ZM182.912 32V28.85L182.612 28.16V22.52C182.612 21.52 182.302 20.74 181.682 20.18C181.082 19.62 180.152 19.34 178.892 19.34C178.032 19.34 177.182 19.48 176.342 19.76C175.522 20.02 174.822 20.38 174.242 20.84L172.562 17.57C173.442 16.95 174.502 16.47 175.742 16.13C176.982 15.79 178.242 15.62 179.522 15.62C181.982 15.62 183.892 16.2 185.252 17.36C186.612 18.52 187.292 20.33 187.292 22.79V32H182.912ZM177.992 32.24C176.732 32.24 175.652 32.03 174.752 31.61C173.852 31.17 173.162 30.58 172.682 29.84C172.202 29.1 171.962 28.27 171.962 27.35C171.962 26.39 172.192 25.55 172.652 24.83C173.132 24.11 173.882 23.55 174.902 23.15C175.922 22.73 177.252 22.52 178.892 22.52H183.182V25.25H179.402C178.302 25.25 177.542 25.43 177.122 25.79C176.722 26.15 176.522 26.6 176.522 27.14C176.522 27.74 176.752 28.22 177.212 28.58C177.692 28.92 178.342 29.09 179.162 29.09C179.942 29.09 180.642 28.91 181.262 28.55C181.882 28.17 182.332 27.62 182.612 26.9L183.332 29.06C182.992 30.1 182.372 30.89 181.472 31.43C180.572 31.97 179.412 32.24 177.992 32.24ZM201.067 32.24C199.707 32.24 198.517 31.94 197.497 31.34C196.477 30.74 195.677 29.83 195.097 28.61C194.537 27.37 194.257 25.81 194.257 23.93C194.257 22.03 194.527 20.47 195.067 19.25C195.607 18.03 196.387 17.12 197.407 16.52C198.427 15.92 199.647 15.62 201.067 15.62C202.587 15.62 203.947 15.97 205.147 16.67C206.367 17.35 207.327 18.31 208.027 19.55C208.747 20.79 209.107 22.25 209.107 23.93C209.107 25.63 208.747 27.1 208.027 28.34C207.327 29.58 206.367 30.54 205.147 31.22C203.947 31.9 202.587 32.24 201.067 32.24ZM191.527 37.82V15.86H195.997V19.16L195.907 23.96L196.207 28.73V37.82H191.527ZM200.257 28.4C201.037 28.4 201.727 28.22 202.327 27.86C202.947 27.5 203.437 26.99 203.797 26.33C204.177 25.65 204.367 24.85 204.367 23.93C204.367 22.99 204.177 22.19 203.797 21.53C203.437 20.87 202.947 20.36 202.327 20C201.727 19.64 201.037 19.46 200.257 19.46C199.477 19.46 198.777 19.64 198.157 20C197.537 20.36 197.047 20.87 196.687 21.53C196.327 22.19 196.147 22.99 196.147 23.93C196.147 24.85 196.327 25.65 196.687 26.33C197.047 26.99 197.537 27.5 198.157 27.86C198.777 28.22 199.477 28.4 200.257 28.4ZM218.84 32.24C216.94 32.24 215.46 31.76 214.4 30.8C213.34 29.82 212.81 28.37 212.81 26.45V12.29H217.49V26.39C217.49 27.07 217.67 27.6 218.03 27.98C218.39 28.34 218.88 28.52 219.5 28.52C220.24 28.52 220.87 28.32 221.39 27.92L222.65 31.22C222.17 31.56 221.59 31.82 220.91 32C220.25 32.16 219.56 32.24 218.84 32.24ZM210.32 19.82V16.22H221.51V19.82H210.32ZM232.789 32.24C230.949 32.24 229.329 31.88 227.929 31.16C226.549 30.44 225.479 29.46 224.719 28.22C223.959 26.96 223.579 25.53 223.579 23.93C223.579 22.31 223.949 20.88 224.689 19.64C225.449 18.38 226.479 17.4 227.779 16.7C229.079 15.98 230.549 15.62 232.189 15.62C233.769 15.62 235.189 15.96 236.449 16.64C237.729 17.3 238.739 18.26 239.479 19.52C240.219 20.76 240.589 22.25 240.589 23.99C240.589 24.17 240.579 24.38 240.559 24.62C240.539 24.84 240.519 25.05 240.499 25.25H227.389V22.52H238.039L236.239 23.33C236.239 22.49 236.069 21.76 235.729 21.14C235.389 20.52 234.919 20.04 234.319 19.7C233.719 19.34 233.019 19.16 232.219 19.16C231.419 19.16 230.709 19.34 230.089 19.7C229.489 20.04 229.019 20.53 228.679 21.17C228.339 21.79 228.169 22.53 228.169 23.39V24.11C228.169 24.99 228.359 25.77 228.739 26.45C229.139 27.11 229.689 27.62 230.389 27.98C231.109 28.32 231.949 28.49 232.909 28.49C233.769 28.49 234.519 28.36 235.159 28.1C235.819 27.84 236.419 27.45 236.959 26.93L239.449 29.63C238.709 30.47 237.779 31.12 236.659 31.58C235.539 32.02 234.249 32.24 232.789 32.24ZM243.705 32V15.86H248.175V20.42L247.545 19.1C248.025 17.96 248.795 17.1 249.855 16.52C250.915 15.92 252.205 15.62 253.725 15.62V19.94C253.525 19.92 253.345 19.91 253.185 19.91C253.025 19.89 252.855 19.88 252.675 19.88C251.395 19.88 250.355 20.25 249.555 20.99C248.775 21.71 248.385 22.84 248.385 24.38V32H243.705ZM262.055 32.24C260.675 32.24 259.345 32.08 258.065 31.76C256.805 31.42 255.805 31 255.065 30.5L256.625 27.14C257.365 27.6 258.235 27.98 259.235 28.28C260.255 28.56 261.255 28.7 262.235 28.7C263.315 28.7 264.075 28.57 264.515 28.31C264.975 28.05 265.205 27.69 265.205 27.23C265.205 26.85 265.025 26.57 264.665 26.39C264.325 26.19 263.865 26.04 263.285 25.94C262.705 25.84 262.065 25.74 261.365 25.64C260.685 25.54 259.995 25.41 259.295 25.25C258.595 25.07 257.955 24.81 257.375 24.47C256.795 24.13 256.325 23.67 255.965 23.09C255.625 22.51 255.455 21.76 255.455 20.84C255.455 19.82 255.745 18.92 256.325 18.14C256.925 17.36 257.785 16.75 258.905 16.31C260.025 15.85 261.365 15.62 262.925 15.62C264.025 15.62 265.145 15.74 266.285 15.98C267.425 16.22 268.375 16.57 269.135 17.03L267.575 20.36C266.795 19.9 266.005 19.59 265.205 19.43C264.425 19.25 263.665 19.16 262.925 19.16C261.885 19.16 261.125 19.3 260.645 19.58C260.165 19.86 259.925 20.22 259.925 20.66C259.925 21.06 260.095 21.36 260.435 21.56C260.795 21.76 261.265 21.92 261.845 22.04C262.425 22.16 263.055 22.27 263.735 22.37C264.435 22.45 265.135 22.58 265.835 22.76C266.535 22.94 267.165 23.2 267.725 23.54C268.305 23.86 268.775 24.31 269.135 24.89C269.495 25.45 269.675 26.19 269.675 27.11C269.675 28.11 269.375 29 268.775 29.78C268.175 30.54 267.305 31.14 266.165 31.58C265.045 32.02 263.675 32.24 262.055 32.24Z" fill="#105741"/>
                    </svg>
                </Link>
                <div className="navbar-item right">
                    <img src={heart} alt="Heart Icon" className="heart-icon" />
                    <img src={shoppingCart} alt="Shopping Cart Icon" className="cart-icon" />
                    <div className="navbar-circle" style={{
                        border: '1px solid black'
                    }}></div>
                </div>
            </nav>
        </div>
    );
};

export default HiddenNavbar;