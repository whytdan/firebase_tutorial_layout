import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import classes from '../posts.module.css';
import { Link } from 'react-router-dom';
import { CircularProgress, TextField } from '@material-ui/core';
import PostCard from '../components/PostCard';
import BasicLayout from '../../../layouts/BasicLayout';


const PostsList = () => {

	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(0);
	const [searchValue, setSearchValue] = useState("");

	// useEffect(() => {
	// 	// setLoading(true);
	// 	getProducts(`${API}/products/?search=${searchValue}&?limit=10&offset=${page*10}`).then(() => {
	// 		// setLoading(false);
	// 	})
	// }, [page, searchValue]);

	const onPaginationChange = (e, value) => {
		setPage(value-1)
	}

	return (
		<BasicLayout>

			<div style={{ margin: '50px auto', minHeight: '80vh', position: 'relative' }}>
				{
					loading ? (<CircularProgress size={64} style={{position: 'absolute', marginLeft:'auto', marginRight: 'auto', right: 0, left: 0, top: '45vh'}} />) 
					: (
						<>
							<TextField
								fullWidth={true}
								variant={'outlined'}
								style={{maxWidth: '80%', margin: '0 auto', display: 'block'}}
								placeholder="Search"
								value={searchValue}
								// onChange={(e) => {
								// 	e.preventDefault();	
								// 	setSearchValue(e.target.value)
								// }}
							/>

							<Grid container spacing={3} className={classes.grid_container}>
								<Grid item xs={12} sm={6} lg={4}>
									<PostCard/>
								</Grid>

								<Grid item xs={12} sm={6} lg={4}>
									<PostCard/>
								</Grid>

								<Grid item xs={12} sm={6} lg={4}>
									<PostCard/>
								</Grid>

								<Grid item xs={12} sm={6} lg={4}>
									<PostCard/>
								</Grid>

							</Grid>

						</>
					)
				}

			</div>
		</BasicLayout>
	);
};

export default PostsList;