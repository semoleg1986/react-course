import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';
import { setSearchQuery } from '../../store/slices/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Home = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.search.query);

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  return (
    <>
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      <Cards searchQuery={searchQuery} />
    </>
  );
};

export default Home;
