import { Extends, Expect } from '@total-typescript/helpers';

type BaseEntity = {
	id: string;
	createdAt: Date;
};

type User = {
	id: string;
	createdAt: Date;
	name: string;
	email: string;
} & BaseEntity;

type Product = {
	id: string;
	createdAt: Date;
	name: string;
	price: number;
} & BaseEntity;

type tests = [
	Expect<
		Extends<
			{
				id: string;
				createdAt: Date;
				name: string;
				email: string;
			},
			User
		>
	>,
	Expect<
		Extends<
			{
				id: string;
				createdAt: Date;
				name: string;
				price: number;
			},
			Product
		>
	>,
];
