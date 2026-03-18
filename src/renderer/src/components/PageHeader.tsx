interface PageHeaderProps {
    hero: string;
    framer: string;
}

function PageHeader({hero, framer} : PageHeaderProps): React.JSX.Element {
    return (
        <div className="p-4">
            <div className="text-6xl">
                {hero}
            </div>
            <div>
                {framer}
            </div>
        </div>
    )
}

export default PageHeader