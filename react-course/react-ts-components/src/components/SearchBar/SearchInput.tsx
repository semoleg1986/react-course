import React, { FormEvent } from 'react';
import './SearchBar.css';
import { BsSearch } from 'react-icons/bs';

interface ISearchInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

class SearchInput extends React.Component<ISearchInputProps> {
  constructor(props: ISearchInputProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="searchBar">
        <i>
          <BsSearch />
        </i>
        <input {...this.props} />
      </div>
    );
  }
}

export { SearchInput };
