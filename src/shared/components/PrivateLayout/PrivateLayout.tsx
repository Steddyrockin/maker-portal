import { PropsWithChildren } from 'react';

import styles from './PrivateLayout.module.scss';

const Sidebar = ({ children }: PropsWithChildren) => {
	return <aside>{children}</aside>;
};

const Content = ({ children }: PropsWithChildren) => {
	return <section className={styles.content}>{children}</section>;
};

const PrivateLayout = ({ children }: PropsWithChildren) => {
	return <main className={styles.main}>{children}</main>;
};

PrivateLayout.Sidebar = Sidebar;
PrivateLayout.Content = Content;

export default PrivateLayout;
