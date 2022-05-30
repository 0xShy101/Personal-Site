import React from 'react';

const Footer = () => {
    return (
        <footer>
            {/* <div style={{ float: 'right' }}>
                <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
                    rss
                </a>
            </div> */}
            <a
                href="https://mobile.twitter.com/0xShy101"
                target="_blank"
                rel="noopener noreferrer"
            >
                twitter
            </a>{' '}
            &bull;{' '}
            <a
                href="https://github.com/0xShy101"
                target="_blank"
                rel="noopener noreferrer"
            >
                github
            </a>{' '}
            &bull;{' '}
            <a
                href="https://stackoverflow.com/users/15744352/0xshy101"
                target="_blank"
                rel="noopener noreferrer"
            >
                stack overflow
            </a>
        </footer>
    );
};


export default Footer;
