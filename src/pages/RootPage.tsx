import PageTitle from "../components/PageTitle";

const RootPage = () => {
	const handleRefresh = () => {}
	return (
		<PageTitle handleRefresh={handleRefresh} title={'Welcome!'}/>
	)
}

export default RootPage;
