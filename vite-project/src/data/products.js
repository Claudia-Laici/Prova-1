 function TagList({ tags, maxTags = 5 }) {
    const displayTags = tags.slice(0, maxTags);
    const hasMore = tags.length > maxTags;

    return (
        <div className="tag-list">
            {displayTags.map((tag, index) => (
                <span key={index} className="tag">
                    {tag}
                </span>
            ))}
            {hasMore && (
                <span className="tag more">
                    +{tags.length - maxTags} altri
                </span>
            )}
        </div>
    );
}