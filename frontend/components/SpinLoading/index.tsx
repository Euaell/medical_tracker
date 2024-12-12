export default function SpinLoading() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <i className="ri-loader-2-line ri-4x animate-spin text-cyan-700"></i>
            <p className="text-cyan-700">Loading...</p>
        </div>
    );
}
