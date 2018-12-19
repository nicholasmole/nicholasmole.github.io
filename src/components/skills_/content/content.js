
import {h, Component} from 'preact';
import styles from './content.scss';

const Content = () => (
	<div className={styles['skills-content_container']}>
    <p>
      I am a full stack developer who loves programming. I've work in both front end applications.
      And back-end deployments.
    </p>  
    <p>
      Here are some resources I find helpful:
    </p>
    <p>
      <a href="https://www.youtube.com/watch?v=rKXFgWP-2xQ"> Whats coming with PHP 7.3</a>
		</p>
    <p>
      <a href="https://www.youtube.com/watch?v=v6iR3Zk4oDY"> Listening to Dan Abramov.</a> 
		</p>
		<p>
      <a href="http://confreaks.tv/videos/railsconf2018-closing-keynote">
        Aaron Patterson presentations.
      </a> 
		</p>
		<p>
			And here are my skills:
		</p>
	</div>
);

export default Content;
