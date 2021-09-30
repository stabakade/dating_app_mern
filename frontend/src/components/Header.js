import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
	return(
		<div className='header'>
			<IconButton>
				<PersonIcon fontSize='large' className='header_icon'/>
			</IconButton>
			<img className='header_logo' src='' alt='header' />
			<IconButton>
				<ForumIcon />
			</IconButton>
		</div>
	)
}

export default Header;