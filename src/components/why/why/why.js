import {h, Component} from 'preact';
import styles from './why.scss';
import Text from './text/text';
import Image from './image/image';

const Why = ({whys}) => (
	<div className={styles['why-why_container']}>
		{
			whys &&
			whys.map(why => (
				<div key={why.title}>
					<Image
						image={why.image}
					/>
					<Text
						text={why.text}
						text2={why.text2}
					/>
				</div>
			))
		}
	</div>
);

export default Why;
