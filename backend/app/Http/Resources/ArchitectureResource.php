<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArchitectureResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'header' => [
                'badge' => 'Juan Manuel Reyes Feliz',
                'title' => 'Architecture &',
                'highlight' => 'Technical Logic.',
                'description' => 'A deep dive into the orchestrated synergy between Next.js frontend reactivity and Laravel\'s robust backend architecture.',
            ],
            'overview' => [
                'title' => 'The Synergy Stack',
                'description' => 'Utilizing a headless approach where Next.js handles the presentation layer while Laravel serves as a JSON API powerhouse, ensuring scalability and peak performance.',
                'frontendTech' => ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
                'backendTech' => ['Laravel 11', 'PHP 8.3', 'MySQL / Redis', 'Sanctum'],
            ],
            'frontend' => [
                'title' => 'Frontend: The App Router Engine',
                'features' => [
                    [
                        'icon' => 'layers',
                        'title' => 'Atomic Component Design',
                        'description' => 'Modular components organized by complexity, ensuring reusability across the entire application while maintaining a strict separation of concerns.',
                    ],
                    [
                        'icon' => 'bolt',
                        'title' => 'Server-Side Excellence',
                        'description' => 'Leveraging React Server Components for initial load speed, while hydration happens only where interactivity is strictly required.',
                    ],
                ],
                'imageUrl' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUtsi8WHR2IEWopffCSnNnqPFQ5ge0UGir3dOgCJARc4RAP7ZjNezXYPKV4dnF6rbUycZyizcusQh5TMjt_ZRIjzToWBOsltmLQZsA_zk0VFJeXrh-WL7K1PBvkEgxNv45m2tJDmOvIR4UAS5EdOAeGszffAD-TZTPF3sB4lWpaIuaJztdbSGsfpzaEYQnoNTEosaLQ0xMV4qlAc0flJSvf9_-ynbZr5Wnj07NbBLrBhIAs78FyeD74YabmWvnqaLDtVY_AnTwpEmo',
                'imageCaption' => 'Dynamic App Directory & Custom Hooks orchestration.',
            ],
            'backend' => [
                'title' => 'Backend',
                'highlight' => 'Laravel JSON API',
                'features' => [
                    [
                        'icon' => 'api',
                        'title' => 'API Logic',
                        'description' => 'Dedicated Http Controllers for resource management, utilizing Laravel Resources for consistent JSON response formatting.',
                    ],
                    [
                        'icon' => 'shield_person',
                        'title' => 'Security First',
                        'description' => 'Sanctum-based SPA authentication with token-based authorization and strict CORS policies for maximum data protection.',
                    ],
                    [
                        'icon' => 'database',
                        'title' => 'Eloquent ORM',
                        'description' => 'Sophisticated data relationship mapping with eager loading to prevent N+1 queries and ensure efficient data fetching.',
                    ],
                ],
            ],
            'fileStructure' => [
                'frontend' => [
                    ['name' => 'app/', 'type' => 'folder'],
                    ['name' => 'dashboard/', 'type' => 'folder'],
                    ['name' => 'layout.tsx', 'type' => 'file'],
                    ['name' => 'components/', 'type' => 'folder'],
                    ['name' => 'ui/', 'type' => 'folder'],
                    ['name' => 'forms/', 'type' => 'folder'],
                    ['name' => 'hooks/', 'type' => 'folder'],
                    ['name' => 'lib/', 'type' => 'folder'],
                    ['name' => 'types/', 'type' => 'folder'],
                ],
                'backend' => [
                    ['name' => 'app/', 'type' => 'folder'],
                    ['name' => 'Http/', 'type' => 'folder'],
                    ['name' => 'Models/', 'type' => 'folder'],
                    ['name' => 'database/', 'type' => 'folder'],
                    ['name' => 'migrations/', 'type' => 'folder'],
                    ['name' => 'seeders/', 'type' => 'folder'],
                    ['name' => 'routes/', 'type' => 'folder'],
                    ['name' => 'api.php', 'type' => 'file'],
                    ['name' => 'tests/', 'type' => 'folder'],
                ],
            ],
            'cta' => [
                'title' => 'Inquisitive about the specifics?',
                'description' => 'View the full implementation details or explore the open-source repository for this architectural blueprint.',
                'primaryButtonText' => 'Explore Repository',
                'secondaryButtonText' => 'Download Tech Specs',
            ],
        ];
    }
}
