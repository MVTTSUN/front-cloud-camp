import { styled } from 'styled-components';
import { UserLinkType } from '../types';

type UserLinkProps = {
  userLink: UserLinkType;
};

export default function UserLink({ userLink }: UserLinkProps) {
  const { name, src } = userLink;

  return (
    <li>
      <Link href={src}>{name}</Link>
    </li>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: #5558fa;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;

  &::before {
    content: url(./img/folder.svg);
    margin-right: 5.6px;
    vertical-align: middle;
  }

  @media screen and (max-width: 540px) {
    &::before {
      display: none;
    }
  }
`;
