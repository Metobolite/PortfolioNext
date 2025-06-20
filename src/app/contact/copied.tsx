'use client';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function Copied() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('nebiyev02@hotmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <button
            onClick={copyEmail}
            className="text-sm px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center transition ease-in-out duration-300"
        >
            {copied ? (
                <>
                    <Check className="w-4 h-4 mr-1" /> Copied!
                </>
            ) : (
                <>
                    <Copy className="w-4 h-4 mr-1" /> Copy
                </>
            )}
        </button>
    );
}
