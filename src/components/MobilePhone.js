export default function MobilePhone({head, body}) {
	return (
		<div className="container">
			{body.map((items, key) => (
				<section className="h6">
					{items.map((item, key) => Array.isArray(item) ? (
						<div className="">
							{item}
						</div>
					) : (
						<div className="h6">
							<h6 className="h6 text-muted">{head[key].name}</h6>
							{item}
						</div>
					))}
				</section>
			))}
		</div>
	)
}