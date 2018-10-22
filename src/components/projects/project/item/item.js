import {h, Component} from 'preact';
import styles from './item.scss';
import Image from './image/image';
import Wrapper from './wrapper/wrapper';
import Title from './title/title';
import Content from './content/content';
import Link from './link/link';
import More from './more/more';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    }
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.setState(state => ({
      expand: !state.expand
    }));
  }

  render() {
    const {
      title,
      image,
      content,
      link,
      expansion
    } = this.props;
    const {
      expand
    } = this.state;
    return (
	  <li className={styles['projects-image_container']}>
		  <Image
			  src={image.src}
			  alt={image.alt}
		  />
		  <Wrapper>
			  <Title
				  title={title}
			  />
			  <Content
				  content={content}
        />
        <div className={styles['projects-more_container']}>
        {
          expand &&
          <More
            expansion={expansion} 
          />
        }
      </div>
        <Link
			    link={link.link}
			    text={link.text}
        />
        <a 
          onClick={this.showMore}
          className={styles['project-more_button']}
        >
          {
            !expand && <span>More...</span>
          }
          {
            expand && <span>Less...</span> 
          }
        </a>
		  </Wrapper>
	  </li>
  );
  }
}

export default Item;
