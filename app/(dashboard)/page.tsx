"use client";
import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";
import { useSearchParams } from "next/navigation";
import BoardList from "./_components/board-list";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  }
}

export default function DashboardPage() {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const favorites = searchParams.get('favorites');

  return (
    <div className="flex-1 p-6">
      {!organization ? <EmptyOrg /> : (
        <BoardList
          orgId={organization.id}
          query={{
            search,
            favorites
          }}
        />
      )}

    </div>
  );
}
