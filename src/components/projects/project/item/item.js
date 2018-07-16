import {h, Component} from 'preact';
import styles from './item.scss';
import Image from './image/image';
import Wrapper from './wrapper/wrapper';
import Title from './title/title';
import Content from './content/content';
import Link from './link/link';

const Item = ({title, image, content, link}) => (
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
			<Link
				link={link.link}
				text={link.text}
			/>
		</Wrapper>
	</li>
);

export default Item;
