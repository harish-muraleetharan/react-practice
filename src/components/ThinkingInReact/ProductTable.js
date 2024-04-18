import React from 'react'

function ProductCategoryRow({ category }) {
	return (
		<tr>
			<th colSpan={2}>
				{category}
			</th>
		</tr>
	);
}

function ProductRow({ product }) {
	const name = product.stocked ? product.name :
		<span style={{ color: 'red' }}>
			{product.name}
		</span>;

	return (
		<tr>
			<td>
				{name}
			</td>
			<td>
				{product.price}
			</td>
		</tr>
	);
}


const ProductTable = ({ products,filterText, inStockOnly }) => {

	let rows = [];
	let lastCategory = null;

	products.forEach(product => {

		if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
			return;
		}
		if (inStockOnly && !product.stocked) {
			return;
		}
		if (product.category !== lastCategory) {
			rows.push(
				<ProductCategoryRow category={product.category} key={product.category} />
			);
		}
		rows.push(
			<ProductRow product={product} key={product.name} />
		);

		lastCategory = product.category;
	});

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		</div>
	)
}

export default ProductTable