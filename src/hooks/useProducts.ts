import { useQuery } from '@tanstack/react-query';
import api from '../config/api';

export function useProducts(limit: number) {
	const query = useQuery({
		queryFn: async () => {
			const response = await api.get(`/products?limit=${limit}`);
			return response.data;
		},
		queryKey: ['products']
	});

	return query;
}
