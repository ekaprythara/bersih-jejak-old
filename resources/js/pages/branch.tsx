import { CreateAdminDialog } from "@/components/branch/create-admin-dialog";
import { CreateBranchDialog } from "@/components/branch/create-branch-dialog";
import { EditAdminDialog } from "@/components/branch/edit-admin-dialog";
import DataTable from "@/components/data-table";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { dashboard } from "@/routes";
import { index } from "@/routes/branches";
import { Head } from "@inertiajs/react";

export type BranchType = {
    id: string;
    name: string;
    address: string;
    phone_number: string;
};

type UserType = {
    name: string;
    address: string;
    branch: BranchType;
    branch_id: string;
};

type BranchProps = {
    branches: BranchType[];
    users: UserType[];
};

const userColumns = [
    {
        header: "Nama",
        accessorKey: "name",
    },
    {
        header: "Nama Pengguna",
        accessorKey: "username",
    },
    {
        header: "Cabang",
        accessorFn: (row: UserType) => {
            const user = row;

            return user.branch ? `Cabang ${user.branch.name}` : "-";
        },
    },
    {
        header: "Status",
        cell: () => {
            return <Switch />;
        },
    },
    {
        header: "Aksi",
        cell: () => {
            return <EditAdminDialog />;
        },
    },
];

const branchColumns = [
    {
        header: "Nama",
        accessorFn: (row: BranchType) => {
            const branch = row;

            return `Cabang ${branch.name}`;
        },
    },
    {
        header: "Alamat",
        accessorKey: "address",
    },
    {
        header: "Status",
        cell: () => {
            return <Switch />;
        },
    },
    {
        header: "Aksi",
        cell: () => {
            return <EditAdminDialog />;
        },
    },
];

const Branch = ({ branches, users }: BranchProps) => {
    return (
        <>
            <Head title="Admin & Cabang" />

            <div className="p-4">
                <Heading
                    title="Admin & Cabang"
                    description="Halaman untuk mengelola data cabang dari pengguna."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                    <div className="rounded-lg border border-neutral-200 p-4 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold text-neutral-800">
                                Data Admin
                            </h2>

                            <CreateAdminDialog branches={branches} />
                        </div>

                        <div>
                            <DataTable columns={userColumns} data={users} />
                        </div>
                    </div>

                    <div className="rounded-lg border border-neutral-200 p-4 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold text-neutral-800">
                                Data Cabang
                            </h2>

                            <CreateBranchDialog />
                        </div>

                        <div>
                            <DataTable
                                columns={branchColumns}
                                data={branches}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Branch.layout = {
    breadcrumbs: [
        {
            title: "Dashboard",
            href: dashboard(),
        },
        {
            title: "Admin & Cabang",
            href: index(),
        },
    ],
};

export default Branch;
