import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
        >
            <Card
                sx={{
                    width: 300,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: 3,
                    overflow: 'hidden',
                    backgroundColor: 'background.paper',
                }}
            >
                <CardMedia
                    component="img"
                    height="180"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                    <Stack spacing={1}>
                        <Typography variant="h6" fontWeight={600}>
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        <Typography variant="h5" color="primary">
                            {product.price}₽
                        </Typography>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => dispatch(addToCart(product))}
                            sx={{ mt: 1, fontWeight: 600 }}
                        >
                            В корзину
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ProductCard;
