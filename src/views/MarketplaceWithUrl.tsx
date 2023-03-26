import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';

const MarketplaceWithUrl: React.FC = () => {
  const userWallet = useUserWallet();
  const candyShop = useShopStore((s) => s.candyShop);

  if (!candyShop) return null;

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={'Marketplace'}
        description={'You can buy NFT with RAYZ token!'}
      />
      <Orders
        wallet={userWallet}
        candyShop={candyShop}
        walletConnectComponent={<ConnectButton />}
        // redirect to single NFT order URL instead of using buy modal
        url={'/marketplace/:tokenMint'}
      />
    </DesContainer>
  );
};

export default MarketplaceWithUrl;

const DesContainer = styled.div`
  width: 100%;
`;
