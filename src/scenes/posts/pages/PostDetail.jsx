import React, { useContext, useEffect } from 'react';
import Slider from "react-slick";
import classes from '../posts.module.css';
import { useParams } from 'react-router-dom';
import { IconButton, Paper, Typography, Button } from '@material-ui/core';
import BasicLayout from '../../../layouts/BasicLayout';


const PostDetail = () => {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	// const { id } = useParams();
	// const { getProductDetail, productDetail } = useContext(productsContext);
	// const { addProductToCart, removeProductFromCart, cart}  = useContext(cartContext);

	useEffect(() => {
		// getProductDetail(id);
	}, [])


	return (
		<BasicLayout>
			<div className={classes.post_detail_content}>
				<div className={classes.post_detail_slider}>
					<Typography variant="h4" className={classes.post_title}>
						{"Test Title"}
					</Typography>
					<Slider {...settings}>
						<div className={classes.imgWrapper}>
							<img src={"https://media.istockphoto.com/photos/ocena-horizon-with-clouds-picture-id105934189?k=6&m=105934189&s=612x612&w=0&h=ZVl1jT-6bDd-HVAXLy7ozt9LD2OKNIH4OwUroRDp5-0="} alt={'ocean'} />
						</div>

						<div className={classes.imgWrapper}>
							<img src={"https://www.fargomoorhead.org/wp-content/uploads/2019/10/Sunset-from-parking-ramp.jpg"} alt={"sunrise"} />
						</div>

						<div className={classes.imgWrapper}>
							<img src={"https://www.friendsofeurope.org/wp/wp-content/uploads/2019/06/bigstock-Planet-Earth-From-Space-Beaut-298703191-e1560939905471.jpg"} alt={"space"} />
						</div>
					</Slider>

					<Paper elevation={9} className={classes.post_content_wrapper}>
						<Typography className={classes.post_field_title}>
							Описание
						</Typography>
						<Typography variant="body2" className={classes.post_description}>
							{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
						</Typography>
					</Paper>
				</div>
			</div>
		</BasicLayout>
	);
};

export default PostDetail;